using System;
using System.Collections.Generic;
using System.Text;
using Autofac;
using Blog.Services.Database;
using LeaderAnalytics.AdaptiveClient.EntityFramework;
using Blog.Core;
using Blog.Domain;

namespace Blog.Services
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);

            builder.RegisterType<CacheCollection>().As<ICacheCollection>();
            builder.RegisterType<ServiceManifest>().As<IServiceManifest>().InstancePerLifetimeScope();
            

            builder.RegisterType<ServiceManifestFactory>();
            builder.RegisterType<Db>();
            builder.RegisterType<DbMSSQL>().Keyed<IMigrationContext>(API_Name.Blog + DatabaseProviderName.MSSQL).InstancePerLifetimeScope();
            builder.RegisterType<DbMySQL>().Keyed<IMigrationContext>(API_Name.Blog + DatabaseProviderName.MySQL).InstancePerLifetimeScope();
        }
    }
}
