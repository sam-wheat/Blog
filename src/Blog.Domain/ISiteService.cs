using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Blog.Model;
using Blog.Core;

namespace Blog.Domain
{
    public interface ISiteService : IDisposable
    {
        Task<AsyncResult> SaveSite(Site site);
        Task<List<Site>> GetActiveSites();
    }
}