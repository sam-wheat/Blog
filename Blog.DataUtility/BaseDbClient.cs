using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Microsoft.Extensions.Configuration;
using Autofac;
using Blog.Services;
using Blog.Domain;
using Blog.Core;


namespace Blog.DataUtility
{
    public abstract class BaseDbClient
    {
        protected IContainer container { get; private set; }
        //protected IServiceClient ServiceClient { get; private set; }

        public BaseDbClient(string env)
        {
            if (env != "development" && env != "prod")
                throw new Exception("environment variable must be \"prod\" or \"development\".");

            BuildContainer();
            CreateServiceClient(env);
        }

        protected void BuildContainer()
        {
            ContainerBuilder builder = new ContainerBuilder();
            builder.RegisterModule(new Blog.Services.AutofacModule());
            builder.RegisterModule(new Blog.Core.AutofacModule());
            container = builder.Build();
        }

        protected void CreateServiceClient(string env)
        {
            INamedConnectionString conn = container.Resolve<INamedConnectionString>();
            IConfigurationBuilder builder = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings." + env + ".json");
            var config = builder.Build();

            conn.ConnectionString = config["Data:ConnectionString"];
            //ServiceClient = container.Resolve<IServiceClient>();
        }
    }
}
