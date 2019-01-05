using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Configuration;
using LeaderAnalytics.AdaptiveClient;

namespace Blog.Core
{
    

    public static class ConnectionstringUtility
    {
        public static class Environment
        {
            public static string Dev = "Development";
            public static string Prod = "Production";
        }

        public static class Provider
        {
            public static string MySQL = "MySQL";
            public static string MSSQL = "MSSQL";
        }

        public static string GetConnectionString(string filePath, string apiName, string providerName)
        {
            IEnumerable<IEndPointConfiguration> endPoints = EndPointUtilities.LoadEndPoints(filePath, false);
            return endPoints.First(x => x.API_Name == apiName && x.ProviderName == providerName).ConnectionString;
        }

        public static string BuildConnectionString(string connectionString, string env, string provider)
        {
            ConfigurationBuilder configBuilder = new ConfigurationBuilder();
            if(env == Environment.Dev)
                configBuilder.AddJsonFile("C:\\Users\\sam\\AppData\\Roaming\\Blog\\appsettings.Development.json");
            else if(env == Environment.Prod)
                configBuilder.AddJsonFile("C:\\Users\\sam\\AppData\\Roaming\\Blog\\appsettings.Production.json");
            else
                throw new Exception($"Environment not recognized: {env}.");

            IConfigurationRoot config = configBuilder.Build();

            if (provider == Provider.MySQL)
            {
                connectionString = connectionString.Replace("{MySQL_UserName}", config["Data:MySQLUserName"]);
                connectionString = connectionString.Replace("{MySQL_Password}", config["Data:MySQLPassword"]);
            }
            else if (provider == Provider.MSSQL)
            {
                connectionString = connectionString.Replace("{MSSQLUserName}", config["Data:MSSQLUserName"]);
                connectionString = connectionString.Replace("{MSSQLPassword}", config["Data:MSSQLPassword"]);
            }
            else
                throw new Exception($"Provider not recognized: {provider}.");

            

            return connectionString;
        }
    }
}
