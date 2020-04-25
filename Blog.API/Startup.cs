using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Caching.Memory;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using LeaderAnalytics.AdaptiveClient;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;
using Blog.Core;
using Blog.Domain;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using System.Net;
using Serilog;
using Serilog.Core;
using Microsoft.Extensions.Logging.Console;

namespace Blog.API
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }
        private string EnvironmentName;

        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            string configFilePath = string.Empty;
            EnvironmentName = env.EnvironmentName;

            if (EnvironmentName == "Development")
                configFilePath = "C:\\Users\\sam\\AppData\\Roaming\\Blog";

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile(Path.Combine(configFilePath, $"appsettings.{env.EnvironmentName}.json"), optional: false)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            // Create Logger
            // Add write permission for <Machine>\IIS_USRS to log directory.

            // Note:  dont use string interpolation when logging. Example:
            // string userName = "sam";
            // Log.Information($"My name is {userName}");               // WRONG:  serilog cannot generate a variable for username
            // Log.Information("My name is {userName}", userName);      // Correct: userName:"sam" can optionally be generated in the log file as a searchable variable
            // Log.Information("User is: {@user}", user);               // Will serialize user
            //

            Log.Logger = new LoggerConfiguration()
                 .WriteTo.File(Configuration["Data:LogDir"], rollingInterval: RollingInterval.Day, restrictedToMinimumLevel: Serilog.Events.LogEventLevel.Information)
                 .CreateLogger();
            Log.Information("Logger created");
            Log.Information("EnvironmentName is {EnvironmentName}", EnvironmentName);
            Log.Information("ConfigureServices started");

            // Add framework services.
            services.AddMemoryCache();
            services.AddSession();
            services.AddDistributedMemoryCache();
            services.AddMvc(x => x.EnableEndpointRouting = false);
            services.AddCors();
            services.AddControllers().AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                options.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver();
            });
        

            // Autofac
            string filePath = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
            Log.Information("filePath is {0}",filePath);
            IEnumerable<IEndPointConfiguration> EndPoints = EndPointUtilities.LoadEndPoints(Path.Combine(filePath, "EndPoints.json"));

            if (EnvironmentName == "Development")
            {
                string connectionString = null;

                connectionString = EndPoints.FirstOrDefault(x => x.API_Name == API_Name.Blog && x.ProviderName == ProviderName.MSSQL).ConnectionString;

                if (!String.IsNullOrEmpty(connectionString))
                {
                    connectionString = ConnectionstringUtility.BuildConnectionString(connectionString, EnvironmentName, ConnectionstringUtility.Provider.MSSQL);
                    EndPoints.FirstOrDefault(x => x.API_Name == API_Name.Blog && x.ProviderName == ProviderName.MSSQL).ConnectionString = connectionString;
                    
                }
            }
            else
                Log.Information("connectionString is {connectionString}", EndPoints.First().ConnectionString);

            var builder = new ContainerBuilder();
            builder.Populate(services);
            builder.RegisterModule(new LeaderAnalytics.AdaptiveClient.EntityFrameworkCore.AutofacModule());
            builder.RegisterModule(new Blog.Services.AutofacModule());
            builder.RegisterModule(new Blog.Core.AutofacModule());
            builder.RegisterType<MemoryCache>().As<IMemoryCache>().SingleInstance();
            RegistrationHelper registrationHelper = new RegistrationHelper(builder);

            registrationHelper
                .RegisterEndPoints(EndPoints)
                .RegisterModule(new Blog.Services.AdaptiveClientModule());

            var container = builder.Build();
            IMemoryCache cache = container.Resolve<IMemoryCache>();
            cache.Set<string>(CacheKeyNames.EmailAccount, Configuration["Data:EmailAccount"]);
            cache.Set<string>(CacheKeyNames.EmailPassword, Configuration["Data:EmailPassword"]);
            
            
            if (string.IsNullOrEmpty(cache.Get<string>(CacheKeyNames.EmailAccount)))
                throw new Exception("EmailAccount not found in appsettings file.");
            if(string.IsNullOrEmpty(cache.Get<string>(CacheKeyNames.EmailPassword)))
                throw new Exception("EmailPassword not found in appsettings file.");

            // Make sure the database exists
            IDatabaseUtilities databaseUtilities = container.Resolve<IDatabaseUtilities>();

            foreach (IEndPointConfiguration ep in EndPoints.Where(x => x.EndPointType == EndPointType.DBMS))
                Task.Run(() => databaseUtilities.CreateOrUpdateDatabase(ep)).Wait();

            Log.Information("ConfigureServices ended");
            return container.Resolve<IServiceProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            
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
                "https://localhost:5001",}).AllowAnyMethod().AllowAnyHeader());
            
            app.UseMvc();
            
            app.UseExceptionHandler( options => {
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
            
        }
    }
}
