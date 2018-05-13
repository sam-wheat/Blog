using System;
using System.Collections.Generic;
using System.Text;
using LeaderAnalytics.AdaptiveClient;
using Blog.Domain;

namespace Blog.Services
{
    public class ServiceManifest : IServiceManifest
    {

        public ICommentService CommentService { get;  }
        public IContentGroupService ContentGroupService { get; }
        public IContentItemService ContentItemService { get; }
        public IMenuContentItemService MenuContentItemService { get; }
        public IMenuService MenuService { get; }
        public ISiteService SiteService { get; }


        private readonly ServiceManifestFactory factory;
        private bool disposed;

        public ServiceManifest(ServiceManifestFactory factory)
        {
            
            this.factory = factory;
        }


        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    disposed = true;
                }
            }
        }
    }
}
