﻿namespace Blog.Services.MSSQL;

public class ContentItemService : BaseService, IContentItemService
{
    public ContentItemService(Db db, IServiceManifest serviceManifest, ICacheCollection cache) : base(db, serviceManifest, cache)
    {

    }

    public async Task<ContentItem> GetContentItemByID(int contentItemID)
    {
        return await db.ContentItems.FirstOrDefaultAsync(x => x.ID == contentItemID);
    }

    public async Task<ContentItem> GetContentItemBySlug(string slug, int siteID)
    {
        string cacheKey = slug + siteID.ToString();
        ContentItem item = Cache.ContentItemCache.Get(cacheKey);

        if (item != null)
            return item;

        item = await db.ContentItems
            .FirstOrDefaultAsync(x => x.Slug.ToLower() == slug.ToLower() && x.Active && x.ContentType == ContentItemType.Post && x.MenuContentItems.Any(y => y.Menu.SiteID == siteID));

        Cache.ContentItemCache.Set(cacheKey, item);
        return item;
    }

    public async Task<List<ContentItem>> GetContentItemsForGroup(int groupID)
    {
        return await db.ContentItems.Where(x => x.ContentGroupID == groupID).ToListAsync();
    }

    public async Task<List<ContentItem>> GetContentItems(int siteID, int menuID, int? groupID, DateTime? dateFilter)
    {
        string cacheKey = siteID.ToString() + menuID.ToString() + (groupID?.ToString() ?? "") + (dateFilter?.ToString() ?? "");
        List<ContentItem> list = Cache.ContentItemListCache.Get(cacheKey);

        if (list != null)
            return list;

        var query = from item in db.ContentItems
                    from mi in item.MenuContentItems
                    where item.Active && item.ContentType == ContentItemType.Post
                    && mi.Menu.SiteID == siteID && mi.MenuID == menuID
                    select item;

        if (groupID != null && groupID != 0)
            query = query.Where(x => x.ContentGroupID == groupID);

        if (dateFilter.HasValue)
            query = query.Where(item => item.PublishDate.HasValue && item.PublishDate.Value.Month == dateFilter.Value.Month && item.PublishDate.Value.Year == dateFilter.Value.Year);

        query = query.Include(x => x.ContentGroup).OrderByDescending(x => x.MenuContentItems.First(y => y.MenuID == menuID).Sequence);
        list = await query.ToListAsync();
        Cache.ContentItemListCache.Set(cacheKey, list);
        return list;
    }

    public async Task<List<KeyValuePair<String, String>>> GetContentItemGroups(string groupColumn, int menuID)
    {
        string cacheKey = groupColumn + menuID.ToString();
        List<KeyValuePair<string, string>> result = Cache.ContentGroupCache.Get(cacheKey);

        if (result != null)
            return result;

        var query = await db.ContentItems.Where(x => x.Active && x.ContentGroupID.HasValue && x.PublishDate.HasValue && x.MenuContentItems.Any(y => y.MenuID == menuID)).ToListAsync();

        if (groupColumn == "GroupID")
        {

            result = (from q in query
                      group q by q.ContentGroupID into groups
                      select new KeyValuePair<string, string>(groups.Key.ToString(), db.ContentGroups.First(x => x.ID == groups.Key).Description)).ToList();
        }
        else if (groupColumn == "PubDate")
        {
            result = (from q in query
                      group q by q.PublishDate.Value.Year.ToString() + "-" + q.PublishDate.Value.Month.ToString().PadLeft(2, '0') + "-01" into groups
                      select new KeyValuePair<string, string>(groups.Key, groups.First().PublishDate.Value.ToString("MMMM") + " " + groups.First().PublishDate.Value.Year.ToString())).OrderByDescending(x => x.Key).ToList();
        }
        else
        {
            throw new Exception("groupColumn not recognized: " + groupColumn);
        }

        result.Insert(0, new KeyValuePair<string, string>(null, "All"));
        Cache.ContentGroupCache.Set(cacheKey, result);
        return result;
    }

    public async Task<AsyncResult> SaveContentItem(ContentItem item)
    {
        AsyncResult result = new AsyncResult();
        db.Entry(item).State = item.ID == 0 ? EntityState.Added : EntityState.Modified;
        await db.SaveChangesAsync();
        result.Success = true;
        return result;
    }
}
