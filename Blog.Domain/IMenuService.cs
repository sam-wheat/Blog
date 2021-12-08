namespace Blog.Domain;

public interface IMenuService : IDisposable
{
    Task<List<Menu>> GetMenusForSite(int siteID);
    Task<AsyncResult> SaveMenu(Menu menu);
}
