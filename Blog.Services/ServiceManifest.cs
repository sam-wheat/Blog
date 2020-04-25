using System;
using System.Collections.Generic;
using System.Text;
using LeaderAnalytics.AdaptiveClient;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;
using Blog.Domain;
using LeaderAnalytics.AdaptiveClient.Utilities;

namespace Blog.Services
{
    public class ServiceManifest : ServiceManifestFactory, IServiceManifest, IDisposable
    {

        public ICommentService CommentService { get => Create<ICommentService>(); }
        public IContentGroupService ContentGroupService { get => Create<IContentGroupService>(); }
        public IContentItemService ContentItemService { get => Create<IContentItemService>(); }
        public IMenuContentItemService MenuContentItemService { get => Create<IMenuContentItemService>(); }
        public IMenuService MenuService { get => Create<IMenuService>(); }
        public ISiteService SiteService { get => Create<ISiteService>(); }
        private bool disposed;

        public ServiceManifest()
        {
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
