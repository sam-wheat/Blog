using Serilog;

namespace Blog;

public class Program
{
    public static void Main(string[] args)
    {
        Log.Logger = new LoggerConfiguration()
           .WriteTo.File("serilog\\log", rollingInterval: RollingInterval.Day, restrictedToMinimumLevel: Serilog.Events.LogEventLevel.Information)
           .CreateLogger();
        Log.Information("Logger created");
        Log.Information("ConfigureServices started");

        try
        {
            CreateWebHostBuilder(args).Build().Run();
        }
        catch (Exception ex)
        {
            Log.Error(ex.ToString());
        }
    }


    public static IHostBuilder CreateWebHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args).ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder
            .UseStartup<Startup>()
            .UseContentRoot(Directory.GetCurrentDirectory());
        });
}
