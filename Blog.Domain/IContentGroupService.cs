namespace Blog.Domain;

public interface IContentGroupService : IDisposable
{
    Task<List<ContentGroup>> GetContentGroupsForSite(int siteID);
    Task<AsyncResult> SaveContentGroup(ContentGroup contentGroup);
}
