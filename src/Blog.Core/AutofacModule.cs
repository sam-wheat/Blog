using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Autofac;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;

namespace Blog.Core
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterType<MSSQL_DbContextOptions>().Keyed<IDbContextOptions>(DatabaseProviderName.MSSQL);
            
        }
    }
}
