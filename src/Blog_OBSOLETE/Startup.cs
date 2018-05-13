using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.FileProviders;
using System.Threading;
using System.Net.Http;

namespace Blog
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }
        private Timer KeepAliveTimer;
        private HttpClient httpClient = new HttpClient();

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
                
            
            Configuration = builder.Build();
            KeepAliveTimer = new Timer(x => CallAPI(), null, 0, ((19*60)+50)*1000);
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddLogging();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IApplicationLifetime appLifetime)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            //app.UseApplicationInsightsRequestTelemetry();
            
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseDeveloperExceptionPage();
            app.UseFileServer(enableDirectoryBrowsing: true);
            app.UseStaticFiles(new StaticFileOptions {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "node_modules")),
                RequestPath = "/node_modules"
            });

            appLifetime.ApplicationStopping.Register(() => {
                KeepAliveTimer.Dispose();
            });
        }

        private void CallAPI()
        {

            try
            {
                string dummy = httpClient.GetStringAsync(new Uri("http://www.samwheat.com/api/api/blog/GetContentItemBySlug?slug=ZZZ&siteID=999")).Result;
            }
            catch (Exception)
            {
                // dont care
            }
        }
    }
}
