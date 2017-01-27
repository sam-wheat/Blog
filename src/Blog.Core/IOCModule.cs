using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Autofac;

namespace Blog.Core
{
    public class IOCModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterType<NamedConnectionString>().As<INamedConnectionString>().SingleInstance();
            builder.RegisterType<ServiceClient>().As<IServiceClient>();
            builder.RegisterType<CacheManager>().As<ICacheManager>();
        }
    }
}
