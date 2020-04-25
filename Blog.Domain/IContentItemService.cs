using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Model;
using Blog.Core;

namespace Blog.Domain
{
    public interface IContentItemService : IDisposable
    {
        Task<List<ContentItem>> GetContentItemsForGroup(int groupID);
        Task<List<ContentItem>> GetContentItems(int siteID, int menuID, int? groupID, DateTime? dateFilter);
        Task<ContentItem> GetContentItemByID(int contentItemID);
        Task<ContentItem> GetContentItemBySlug(string slug, int siteID);
        Task<AsyncResult> SaveContentItem(ContentItem item);
        Task<List<KeyValuePair<String, String>>> GetContentItemGroups(string groupColumn, int menuID);
    }
}
