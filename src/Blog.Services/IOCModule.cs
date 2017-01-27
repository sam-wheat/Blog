using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Autofac;
using Blog.Domain;
using Blog.Core;
using Blog.Services.Integration;

namespace Blog.Services
{
    public class IOCModule: Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterType<MyDbContextOptions>();
            builder.RegisterType<DropAndRecreateInitializer>();
            builder.RegisterType<CommentService>().As<ICommentService>();
            builder.RegisterType<ContentGroupService>().As<IContentGroupService>();
            builder.RegisterType<ContentItemService>().As<IContentItemService>();
            builder.RegisterType<MenuService>().As<IMenuService>();
            builder.RegisterType<SiteService>().As<ISiteService>();
            builder.RegisterType<MenuContentItemService>().As<IMenuContentItemService>();
            builder.RegisterType<DatabaseUtilities>().As<IDatabaseUtilities>();
        }
    }
}
