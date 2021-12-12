﻿// https://gist.github.com/davidfowl/0e0372c3c1d895c3ce195ba983b1e03d
namespace Blog.API;

public class Program
{

    public static async Task Main(string[] args)
    {
        LeaderAnalytics.Core.EnvironmentName environmentName = RuntimeEnvironment.GetEnvironmentName();
        string logFolder = "."; // fallback location if we cannot read config
        Exception startupEx = null;
        IConfigurationRoot appConfig = null;

        try
        {
            appConfig = BuildConfig(environmentName);
            logFolder = appConfig["Logging:LogFolder"];
        }
        catch (Exception ex)
        {
            startupEx = ex;
        }
        finally
        {
            Log.Logger = new LoggerConfiguration()
                .WriteTo.File(logFolder, rollingInterval: RollingInterval.Day, restrictedToMinimumLevel: Serilog.Events.LogEventLevel.Information)
                .Enrich.FromLogContext()
                .WriteTo.Console()
                .CreateLogger();
        }

        if (startupEx != null)
        {
            Log.Fatal("An exception occured during startup configuration.  Program execution will not continue.");
            Log.Fatal(startupEx.ToString());
            Log.CloseAndFlush();
            System.Threading.Thread.Sleep(2000);
            return;
        }
     

        try
        {
            Log.Information("Program Blog.API started");
            Log.Information("Environment is: {env}", environmentName);
            Log.Information("Log files will be written to {logRoot}", logFolder);
            IEnumerable<EndPointConfiguration> EndPoints = null;
            WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
            
            builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());            // Host
            builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
            {
                containerBuilder.RegisterModule(new LeaderAnalytics.AdaptiveClient.EntityFrameworkCore.AutofacModule());
                containerBuilder.RegisterModule(new Blog.Services.AutofacModule());
                containerBuilder.RegisterModule(new Blog.Core.AutofacModule());
                containerBuilder.RegisterType<MemoryCache>().As<IMemoryCache>().SingleInstance();
                RegistrationHelper registrationHelper = new RegistrationHelper(containerBuilder);
                EndPoints = appConfig.GetSection("EndPoints").Get<IEnumerable<EndPointConfiguration>>();
                registrationHelper
                    .RegisterEndPoints(EndPoints)
                    .RegisterModule(new Blog.Services.AdaptiveClientModule());

                // Don't build the container; that gets done for you.

            });

            builder.WebHost.CaptureStartupErrors(true);                                             // WebHost
            builder.WebHost.UseContentRoot(Directory.GetCurrentDirectory());
            builder.Configuration.AddConfiguration(appConfig);
            builder.Services.AddMvc();
            builder.Services.AddMemoryCache();
            builder.Services.AddSession();
            builder.Services.AddDistributedMemoryCache();
            builder.Services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                options.JsonSerializerOptions.PropertyNamingPolicy = null;
            });
            builder.Services.AddCors();
            WebApplication app = builder.Build();

            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            app.UseDeveloperExceptionPage(); // must come before UseMvc.
            app.UseSession();
            app.UseCors(x => x.WithOrigins(new string[] {
                "http://www.samwheat.com",
                "https://www.samwheat.com",
                "http://samwheat.com",
                "https://samwheat.com",
                "http://localhost",
                "http://localhost:80",
                "http://localhost:5004",
                "http://localhost:4200",
                "http://dev.samwheat.com",
                "http://samwheatweb.azurewebsites.net",
                "https://samwheatweb.azurewebsites.net",
                "https://localhost:5001",
                "https://samwheatweb-staging.azurewebsites.net"
            }).AllowAnyMethod().AllowAnyHeader());

            app.UseRouting();
            app.UseAuthorization(); 
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseExceptionHandler(options => {
                options.Run(
                    async context =>
                    {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        context.Response.ContentType = "text/html";
                        var ex = context.Features.Get<IExceptionHandlerFeature>();
                        if (ex != null)
                        {
                            var err = $"<h1>Error: {ex.Error.Message}</h1>{ex.Error.StackTrace }";
                            await context.Response.WriteAsync(err).ConfigureAwait(false);
                            Log.Error(ex.ToString());
                        }
                    });
            });

            IMemoryCache cache = app.Services.GetService<IMemoryCache>();
            cache.Set<string>(CacheKeyNames.EmailAccount, appConfig["Data:EmailAccount"]);
            cache.Set<string>(CacheKeyNames.EmailPassword, appConfig["Data:EmailPassword"]);

            if (string.IsNullOrEmpty(cache.Get<string>(CacheKeyNames.EmailAccount)))
                throw new Exception("EmailAccount not found in appsettings file.");
            if (string.IsNullOrEmpty(cache.Get<string>(CacheKeyNames.EmailPassword)))
                throw new Exception("EmailPassword not found in appsettings file.");

            app.Run();

        }
        catch (Exception ex)
        {
            Log.Error(ex.ToString());
        }
        finally
        {
            Log.CloseAndFlush();
            await Task.Delay(2000);
        }
    }

    private static IConfigurationRoot BuildConfig(LeaderAnalytics.Core.EnvironmentName envName)
    {
        string configFilePath = string.Empty;

        if (envName == LeaderAnalytics.Core.EnvironmentName.local || envName == LeaderAnalytics.Core.EnvironmentName.development)
            configFilePath = ConfigFileLocation.Folder; 

        var cfg = new ConfigurationBuilder()
                    .AddJsonFile("appsettings.json", optional: true)
                    .AddJsonFile(Path.Combine(configFilePath, $"appsettings.{envName}.json"), optional: false)
                    .AddJsonFile(Path.Combine(configFilePath, $"endpoints.{envName}.json"), optional: false)
                    .AddEnvironmentVariables().Build();
        return cfg;
    }
}