using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Model;
using Blog.Core;

namespace Blog.Domain
{
    public interface IContentGroupService : IDisposable
    {
        Task<List<ContentGroup>> GetContentGroupsForSite(int siteID);
        Task<AsyncResult> SaveContentGroup(ContentGroup contentGroup);
    }
}
