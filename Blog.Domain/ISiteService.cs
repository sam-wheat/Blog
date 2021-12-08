namespace Blog.Domain;

public interface ISiteService : IDisposable
{
    Task<AsyncResult> SaveSite(Site site);
    Task<List<Site>> GetActiveSites();
}
