using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using System.Security.Cryptography.X509Certificates;


namespace Blog.API
{
    public class Program
    {

        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();



        //public static void Main(string[] args)
        //{
        //    string env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
        //    string configFilePath = "C:\\Users\\sam\\AppData\\Roaming\\Blog";

        //    var config = new ConfigurationBuilder()
        //        .SetBasePath(Directory.GetCurrentDirectory())
        //        .AddJsonFile("hosting.json", optional: true)
        //        .AddJsonFile(Path.Combine(configFilePath, $"appsettings.{env}.json"), optional: false)
        //        .AddCommandLine(args)  // will get server.urls from command line
        //        .Build();

        //    //X509Certificate2 xCert = new X509Certificate2("localhostSSLCert.pfx", config["Data:SSLPassword"]);

        //    var host = new WebHostBuilder()
        //        //.UseKestrel(x => x.UseHttps(xCert))
        //        .UseKestrel()
        //        .UseConfiguration(config)
        //        .UseContentRoot(Directory.GetCurrentDirectory())
        //        //.UseUrls("http://localhost:53389/")
        //        .UseIISIntegration()
        //        .UseStartup<Startup>()
        //        .Build();

        //    try
        //    {
        //        host.Run();
        //    }
        //    catch (Exception ex)
        //    {
        //        string y = ex.Message;
        //    }
        //}
    }
}
