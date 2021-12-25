namespace Blog.Core;

public static class ConfigHelper
{
    public const string ConfigFileFolder = "C:\\Users\\sam\\AppData\\Roaming\\Blog";


    public async static Task<IConfigurationRoot> BuildConfig(EnvironmentName envName)
    {
        // if we are in development, load the appsettings file in the out-of-repo location.
        // if we are in prod, load appsettings.production.json and populate the secrets 
        // from the azure vault.

        string configFilePath = string.Empty;

        if (envName == LeaderAnalytics.Core.EnvironmentName.local || envName == LeaderAnalytics.Core.EnvironmentName.development)
            configFilePath = ConfigFileFolder;

        var cfg = new ConfigurationBuilder()
                    .AddJsonFile("appsettings.json", optional: true)
                    .AddJsonFile(Path.Combine(configFilePath, $"appsettings.{envName}.json"), optional: false)
                    .AddJsonFile(Path.Combine(configFilePath, $"endpoints.{envName}.json"), optional: false)
                    .AddEnvironmentVariables().Build();

        if (envName == LeaderAnalytics.Core.EnvironmentName.production)
        {
            var client = new SecretClient(new Uri("https://leaderanalyticsvault.vault.azure.net/"), new DefaultAzureCredential());
            Task<Azure.Response<KeyVaultSecret>> emailAccountTask = client.GetSecretAsync("EmailAccount");
            Task<Azure.Response<KeyVaultSecret>> emailPasswordTask = client.GetSecretAsync("EmailPassword");
            Task<Azure.Response<KeyVaultSecret>> blogDBPasswordTask = client.GetSecretAsync("BlogDBPassword");
            await Task.WhenAll(emailAccountTask, emailPasswordTask, blogDBPasswordTask);
            cfg["Data:EmailAccount"] = cfg["Data:EmailAccount"].Replace("{EmailAccount}", emailAccountTask.Result.Value.Value);
            cfg["Data:EmailPassword"] = cfg["Data:EmailPassword"].Replace("{EmailPassword}", emailPasswordTask.Result.Value.Value);
            cfg["EndPoints:0:ConnectionString"] = cfg["EndPoints:0:ConnectionString"].Replace("{BlogDBPassword}", blogDBPasswordTask.Result.Value.Value);
        }

        return cfg;
    }
}
