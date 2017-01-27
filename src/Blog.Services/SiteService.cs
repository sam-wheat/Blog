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
    public class SiteService : BaseService, ISiteService
    {

        public SiteService(MyDbContextOptions options) : base(options)
        {

        }

        public async Task<AsyncResult> SaveSite(Site site)
        {
            AsyncResult result = new AsyncResult();

            if (String.IsNullOrEmpty(site.SiteName))
                result.ErrorMessage = "Site name is required.";

            if (!String.IsNullOrEmpty(result.ErrorMessage))
                return result;

            if (site.ID == 0)
                db.Sites.Add(site);
            else
                db.AttachAsModified(site);

            await db.SaveChangesAsync();
            result.Success = true;
            return result;
        }

        public async Task<List<Site>> GetActiveSites()
        {
            var list = await db.Sites.Where(x => x.Active)
                .Include(x => x.Menus).ThenInclude(m => m.MenuContentItems).ThenInclude(x => x.ContentItem).ToListAsync();

            foreach (Site site in list)
                foreach (Menu menu in site.Menus)
                    menu.MenuContentItems = menu.MenuContentItems.OrderBy(x => x.Sequence).ToList();         

            return list;
        }

        public async Task SeedDB()
        {
            try
            {
                if (!db.Sites.Any())
                    await new Integration.SiteSeed().SeedDB(db);
            }
            catch (Exception ex)
            {
                string y = ex.Message;
            }
        }
    }
}
