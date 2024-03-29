﻿namespace Blog.Services.MSSQL;

public class SiteService : BaseService, ISiteService
{

    public SiteService(Db db, IServiceManifest serviceManifest, ICacheCollection cache) : base(db, serviceManifest, cache)
    {

    }

    public async Task<AsyncResult> SaveSite(Site site)
    {
        AsyncResult result = new AsyncResult();

        if (String.IsNullOrEmpty(site.SiteName))
            result.ErrorMessage = "Site name is required.";

        if (!String.IsNullOrEmpty(result.ErrorMessage))
            return result;

        db.Entry(site).State = site.ID == 0 ? EntityState.Added : EntityState.Modified;
        await db.SaveChangesAsync();
        result.Success = true;
        return result;
    }

    public async Task<List<Site>> GetActiveSites()
    {
        List<Site> list = Cache.SiteCache.Get("1");

        if (list != null)
            return list;

        list = await db.Sites.Where(x => x.Active)
            .Include(x => x.Menus).ThenInclude(m => m.MenuContentItems).ThenInclude(x => x.ContentItem).ToListAsync();

        foreach (Site site in list)
            foreach (Menu menu in site.Menus)
                menu.MenuContentItems = menu.MenuContentItems.OrderBy(x => x.Sequence).ToList();

        Cache.SiteCache.Set("1", list);

        return list;
    }
}
