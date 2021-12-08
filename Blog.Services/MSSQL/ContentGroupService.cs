namespace Blog.Services.MSSQL;

public class ContentGroupService : BaseService, IContentGroupService
{
    public ContentGroupService(Db db, IServiceManifest serviceManifest, ICacheCollection cache) : base(db, serviceManifest, cache)
    {

    }

    public async Task<List<ContentGroup>> GetContentGroupsForSite(int siteID)
    {
        return await db.ContentGroups.Where(x => x.SiteID == siteID).OrderBy(x => x.Sequence).ToListAsync();
    }

    public async Task<AsyncResult> SaveContentGroup(ContentGroup contentGroup)
    {
        AsyncResult result = new AsyncResult();

        if (String.IsNullOrEmpty(contentGroup.Description))
            result.ErrorMessage = "Content group description is required.";
        else if (!db.Sites.Any(x => x.ID == contentGroup.SiteID))
            result.ErrorMessage = "Invalid Site ID.";

        if (!String.IsNullOrEmpty(result.ErrorMessage))
            return result;


        if (contentGroup.ID == 0)
        {
            ContentGroup last = db.ContentGroups.OrderBy(x => x.Sequence).LastOrDefault(x => x.SiteID == contentGroup.SiteID);
            contentGroup.Sequence = last == null ? 1 : last.Sequence + 1;
            db.Entry(contentGroup).State = EntityState.Added;
        }
        else
            db.Entry(contentGroup).State = EntityState.Modified;

        await db.SaveChangesAsync();
        result.Success = true;
        return result;
    }
}
