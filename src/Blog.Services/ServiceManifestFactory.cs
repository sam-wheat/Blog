using System;
using System.Collections.Generic;
using System.Text;
using Blog.Domain;
using Autofac;
using LeaderAnalytics.AdaptiveClient;
using LeaderAnalytics.AdaptiveClient.Autofac;
using LeaderAnalytics.AdaptiveClient.EntityFramework;

namespace Blog.Services
{
    public class ServiceManifestFactory
    {
        private Func<IEndPointConfiguration> endPointFactory;
        private IComponentContext cxt;


        //public Func<string, string, ICommentService> CommentServiceFactory { get; set; }
        //public Func<string, string, IContentGroupService> ContentGroupServiceFactory { get; set; }
        //public Func<string, string, IContentItemService> ContentItemServiceFactory { get; set; }
        //public Func<string, string, IMenuContentItemService> MenuContentItemServiceFactory { get; set; }
        //public Func<string, string, IMenuService> MenuServiceFactory { get; set; }
        //public Func<string, string, ISiteService> SiteServiceFactory { get; set; }


        public ServiceManifestFactory(Func<IEndPointConfiguration> endPointFactory, IComponentContext cxt)
        {
            this.endPointFactory = endPointFactory;
            this.cxt = cxt;
        }


        //public TService CreateService<TService>()
        //{
        //    IEndPointConfiguration ep = endPointFactory();
        //    return ResolutionHelper.ResolveClient<TService>(cxt, ep.EndPointType, ep.ProviderName);
        //}
    }
}
