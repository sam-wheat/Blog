using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.Extensions.Configuration;
using Blog.Core;
using Blog.Domain;
using Blog.Services;
using Blog.Services.Integration;
using Autofac;

namespace Blog.IntegrationTests
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class BaseTest
    {
        protected IContainer container { get; private set; }
        protected IServiceClient ServiceClient { get; private set; }

        public BaseTest()
        {
            BuildContainer();
            CreateServiceClient();
            InitializeDatabase();
            SeedDatabase();
        }

        protected void BuildContainer()
        {
            ContainerBuilder builder = new ContainerBuilder();
            builder.RegisterModule(new Blog.Services.IOCModule());
            builder.RegisterModule(new Blog.Core.IOCModule());
            container = builder.Build();
        }

        protected void CreateServiceClient()
        {
            INamedConnectionString conn = container.Resolve<INamedConnectionString>();
            IConfigurationBuilder builder = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json");
            var config = builder.Build();

            conn.ConnectionString = config["Data:ConnectionString"];
            ServiceClient = container.Resolve<IServiceClient>();
        }

        protected void InitializeDatabase()
        {
            DropAndRecreateInitializer initializer = container.Resolve<DropAndRecreateInitializer>();
            initializer.DropAndRecreateDb();
        }

        protected void SeedDatabase()
        {
            ServiceClient.OfType<ISiteService>().Try(x => x.SeedDB()).Wait();
        }
    }
}
