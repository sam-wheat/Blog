using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.Extensions.Configuration;
using Blog.Core;
using Blog.Domain;
using Blog.Services;
using Autofac;
using Microsoft.EntityFrameworkCore;
using LeaderAnalytics.AdaptiveClient;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;
using Blog.Services.Database;
using Blog.Services.Database.DataInitalizers;

namespace Blog.IntegrationTests
{
    public class BaseTest
    {
        protected IContainer container { get; private set; }
        protected IAdaptiveClient<IServiceManifest> ServiceClient { get; private set; }
        protected IEnumerable<IEndPointConfiguration> EndPoints { get; private set; }

        public BaseTest()
        {
            BuildContainer().Wait();
            InitializeDatabase();
            SeedDatabase();
        }

        protected async Task BuildContainer()
        {
            EndPoints = EndPointUtilities.LoadEndPoints("EndPoints.json");
            string configFilePath = "C:\\Users\\sam\\AppData\\Roaming\\Blog\\appsettings.Development.json";
            ConfigurationBuilder configBuilder = new ConfigurationBuilder();
            configBuilder.AddJsonFile(configFilePath);
            IConfigurationRoot config = configBuilder.Build();
            IEndPointConfiguration ep = EndPoints.FirstOrDefault(x => x.Name == "Blog_MySQL");

            if (ep != null)
            {
                ep.ConnectionString = ep.ConnectionString.Replace("{Blog_MySQL_UserName}", config["Data:MySQLUserName"]);
                ep.ConnectionString = ep.ConnectionString.Replace("{Blog_MySQL_Password}", config["Data:MySQLPassword"]);
            }
            
            ContainerBuilder builder = new ContainerBuilder();
            builder.RegisterModule(new Blog.Core.AutofacModule());
            builder.RegisterModule(new Blog.Services.AutofacModule());
            builder.RegisterModule(new LeaderAnalytics.AdaptiveClient.AutofacModule());
            builder.RegisterModule(new LeaderAnalytics.AdaptiveClient.EntityFrameworkCore.AutofacModule());
            RegistrationHelper registrationHelper = new RegistrationHelper(builder);
            registrationHelper.RegisterEndPoints(EndPoints);
            registrationHelper.RegisterModule(new Blog.Services.AdaptiveClientModule());
            

            // ---------
            
            builder.RegisterType<DbMSSQL>().Keyed<IMigrationContext>(API_Name.Blog + DatabaseProviderName.MSSQL);
            builder.RegisterType<SiteDataInitalizer>().Keyed<IDatabaseInitializer>(API_Name.Blog + DatabaseProviderName.MSSQL);


       


            // ---------
            container = builder.Build();
            IDatabaseUtilities dbUtils = container.Resolve<IDatabaseUtilities>();
            IEndPointConfiguration mssql_ep = EndPoints.First(x => x.Name == "Blog_SQLServer");
            ServiceClient = container.Resolve <IAdaptiveClient<IServiceManifest>>();
            //await dbUtils.CreateOrUpdateDatabase(mssql_ep);
        }

        

        protected void InitializeDatabase()
        {
            //DropAndRecreateInitializer initializer = container.Resolve<DropAndRecreateInitializer>();
            //initializer.DropAndRecreateDb();
        }

        protected void SeedDatabase()
        {
            //ServiceClient.OfType<ISiteService>().Try(x => x.SeedDB()).Wait();
        }
    }
}
