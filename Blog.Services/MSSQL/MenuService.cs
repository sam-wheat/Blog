using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Blog.Core;
using Blog.Domain;
using Blog.Model;
using Blog.Services.Database;

namespace Blog.Services.MSSQL
{
    public class MenuService : BaseService, IMenuService
    {
        public MenuService(Db db, IServiceManifest serviceManifest, ICacheCollection cache) : base(db, serviceManifest, cache)
        {

        }

        public async Task<List<Menu>> GetMenusForSite(int siteID)
        {
            List<Menu> menus = await db.Menus.Where(x => x.SiteID == siteID).ToListAsync();

            foreach (Menu menu in menus.Where(x => x.MenuContentItems != null))
                menu.MenuContentItems = menu.MenuContentItems.OrderBy(y => y.Sequence).ToList();

            return menus;
        }

        public async Task<AsyncResult> SaveMenu(Menu menu)
        {
            AsyncResult result = new AsyncResult();

            if (String.IsNullOrEmpty(menu.MenuName))
                result.ErrorMessage = "Menu name is required.";

            if (!string.IsNullOrEmpty(result.ErrorMessage))
                return result;
            
            db.Entry(menu).State = menu.ID == 0 ? EntityState.Added : EntityState.Modified;
            await db.SaveChangesAsync();
            result.Success = true;
            return result;
        }
    }
}
