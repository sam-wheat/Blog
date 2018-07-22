using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Model;
using Blog.Core;

namespace Blog.Domain
{
    public interface IMenuService: IDisposable
    {
        Task<List<Menu>> GetMenusForSite(int siteID);
        Task<AsyncResult> SaveMenu(Menu menu);
    }
}
