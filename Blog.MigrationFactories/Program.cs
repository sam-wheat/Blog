﻿using Autofac;
using Blog.Domain;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;
using LeaderAnalytics.AdaptiveClient;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Serilog;
using LeaderAnalytics.Core;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Blog.Core;

namespace Blog.MigrationFactories;

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
            IHostBuilder builder = Host.CreateDefaultBuilder(args);
            builder.UseServiceProviderFactory(new AutofacServiceProviderFactory());            
            builder.ConfigureContainer<ContainerBuilder>(containerBuilder =>
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
            builder.ConfigureAppConfiguration(app => app.AddConfiguration(appConfig));
            
            IHost app = builder.Build();
            IDatabaseUtilities databaseUtilities = app.Services.GetService<IDatabaseUtilities>();

            foreach (IEndPointConfiguration ep in EndPoints.Where(x => x.IsActive && x.EndPointType == EndPointType.DBMS))
            {
                Log.Information("Starting update for EndPoint {}", ep.Name);
                await databaseUtilities.CreateOrUpdateDatabase(ep);
                Log.Information("Update for EndPoint {} completed.", ep.Name);
            }
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
        Log.Information("Migrations completed.");
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