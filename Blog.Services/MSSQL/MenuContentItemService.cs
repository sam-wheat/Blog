namespace Blog.Services.MSSQL;

public class MenuContentItemService : BaseService, IMenuContentItemService
{
    public MenuContentItemService(Db db, IServiceManifest serviceManifest, ICacheCollection cache) : base(db, serviceManifest, cache)
    {

    }

    public async Task<AsyncResult> SaveMenuContentItem(MenuContentItem mci)
    {
        AsyncResult<MenuContentItem> result = new AsyncResult<MenuContentItem>();
        db.Entry(mci).State = mci.ID == 0 ? EntityState.Added : EntityState.Modified;
        await db.SaveChangesAsync();
        result.Success = true;
        return result;
    }
}
