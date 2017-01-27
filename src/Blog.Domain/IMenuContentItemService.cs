using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Blog.Model;
using Blog.Core;

namespace Blog.Domain
{
    public interface IMenuContentItemService : IDisposable
    {
        Task<AsyncResult> SaveMenuContentItem(MenuContentItem mci);
    }
}
