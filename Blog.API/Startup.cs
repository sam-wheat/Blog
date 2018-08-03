using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Caching.Distributed;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using LeaderAnalytics.AdaptiveClient;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;
using Blog.Core;
using Blog.Domain;

namespace Blog.API
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }
        private string emailAccount;
        private string emailPassword;

        public Startup(IHostingEnvironment env)
        {
            string configFilePath = "C:\\Users\\sam\\AppData\\Roaming\\Blog";

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
            // Add framework services.
            services.AddMemoryCache();
            services.AddSession();
            services.AddDistributedMemoryCache();
            services.AddMvc();
            services.AddCors();
            var formatterSettings = JsonSerializerSettingsProvider.CreateSerializerSettings();
            formatterSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            formatterSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver();
            JsonOutputFormatter formatter = new JsonOutputFormatter(formatterSettings, System.Buffers.ArrayPool<char>.Shared);
            
            services.Configure<MvcOptions>(options =>
            {
                options.OutputFormatters.RemoveType<JsonOutputFormatter>();
                options.OutputFormatters.Insert(0, formatter);
            });

            // Autofac
            string filePath = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
            IEnumerable<IEndPointConfiguration> EndPoints = EndPointUtilities.LoadEndPoints(Path.Combine(filePath, "EndPoints.json"));
            EndPoints.First(x => x.API_Name == API_Name.Blog && x.ProviderName == ProviderName.MySQL).ConnectionString = ConnectionstringUtility.BuildConnectionString(EndPoints.First(x => x.API_Name == API_Name.Blog && x.ProviderName == ProviderName.MySQL).ConnectionString);
            var builder = new ContainerBuilder();
            builder.Populate(services);
            builder.RegisterModule(new LeaderAnalytics.AdaptiveClient.EntityFrameworkCore.AutofacModule());
            builder.RegisterModule(new Blog.Services.AutofacModule());
            builder.RegisterModule(new Blog.Core.AutofacModule());
            builder.RegisterType<Microsoft.Extensions.Caching.Memory.MemoryCache>().As<Microsoft.Extensions.Caching.Memory.IMemoryCache>().SingleInstance();
            RegistrationHelper registrationHelper = new RegistrationHelper(builder);

            registrationHelper
                .RegisterEndPoints(EndPoints)
                .RegisterModule(new Blog.Services.AdaptiveClientModule());

            var container = builder.Build();
            emailAccount = Configuration["Data:EmailAccount"];
            emailPassword = Configuration["Data:EmailPassword"];

            if (string.IsNullOrEmpty(emailAccount))
                throw new Exception("EmailAccount not found in appsettings file.");
            if(string.IsNullOrEmpty(emailPassword))
                throw new Exception("EmailPassword not found in appsettings file.");

            // Make sure the database exists
            //container.Resolve<IDatabaseUtilities>().VerifyDatabase(ep);

            return container.Resolve<IServiceProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseSession();
            app.UseCors(x => x.WithOrigins(new string[] { "http://www.samwheat.com", "https://www.samwheat.com", "http://samwheat.com", "https://samwheat.com",  "http://localhost:5004", "http://localhost:4200", "http://dev.samwheat.com" }).AllowAnyMethod().AllowAnyHeader());
            app.UseMvc();
        }
    }
}
