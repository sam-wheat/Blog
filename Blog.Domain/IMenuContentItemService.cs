namespace Blog.Domain;

public interface IMenuContentItemService : IDisposable
{
    Task<AsyncResult> SaveMenuContentItem(MenuContentItem mci);
}
