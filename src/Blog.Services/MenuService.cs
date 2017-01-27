using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Blog.Core;
using Blog.Domain;
using Blog.Model;

namespace Blog.Services
{
    public class MenuService : BaseService, IMenuService
    {
        public MenuService(MyDbContextOptions options) : base(options)
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

            if (menu.ID == 0)
                db.Menus.Add(menu);
            else
                db.AttachAsModified(menu);

            await db.SaveChangesAsync();
            result.Success = true;
            return result;
        }
    }
}
