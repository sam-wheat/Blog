using System;
using System.Collections.Generic;
using System.Text;
using Autofac;
using Blog.Services.Database;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;
using Blog.Core;
using Blog.Domain;

namespace Blog.Services
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);

            builder.RegisterType<CacheCollection>().As<ICacheCollection>().SingleInstance();
            
        }
    }
}
