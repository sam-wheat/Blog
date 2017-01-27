using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Model;
using Blog.Domain;
using Blog.Core;

namespace Blog.DataUtility
{
    public class DbUpdater : BaseDbClient
    {
        public DbUpdater(string env) :base(env)
        {

        }

        public async Task Update()
        {
            Site site = ServiceClient.OfType<ISiteService>().TryAsync(x => x.GetActiveSites()).Result.First(x => x.SiteName == "Sams Blog");
            List<ContentGroup> contentGroups = await ServiceClient.OfType<IContentGroupService>().TryAsync(x => x.GetContentGroupsForSite(site.ID));
            ContentGroup netContentGroup = contentGroups.Single(x => x.Description == "Software Development");
            List<Menu> menus = await ServiceClient.OfType<IMenuService>().TryAsync(x => x.GetMenusForSite(site.ID));
            Menu blogIndexMenu = menus.Single(x => x.MenuName == "BlogIndex");
            List<ContentItem> contentItems = await ServiceClient.OfType<IContentItemService>().TryAsync(x => x.GetContentItems(site.ID, blogIndexMenu.ID, null, null));

            ContentItem mvcArticle = contentItems.SingleOrDefault(x => x.Slug .Trim() == "How-to-use-ViewModels-effectively");

            if (mvcArticle == null)
            {
                mvcArticle = new ContentItem
                {
                    Active = true,
                    Abstract = "Seamlessly interact with local or remote access clients.  Provide direct database access or fall back to remote access as connectivity permits.",
                    AllowComments = true,
                    ContentGroupID = netContentGroup.ID,
                    PublishDate = new DateTime(2017, 1, 5),
                    Icon = "adaptive.jpg",
                    Slug = "AdaptiveClient-pattern-to-resolve-a-data-access-client",
                    URL = "adaptiveClient/adaptiveClient.html",
                    Title = "AdaptiveClient - Pattern to dynamically resolve a data access client based on server availability",
                    ContentType = ContentItemType.Post
                };
                AsyncResult result = await ServiceClient.OfType<IContentItemService>().TryAsync(x => x.SaveContentItem(mvcArticle));
                MenuContentItem mvcArticleMCI = new MenuContentItem { MenuID = blogIndexMenu.ID, Sequence = 8, ContentItemID = mvcArticle.ID };
                AsyncResult mciResult = await ServiceClient.OfType<IMenuContentItemService>().TryAsync(x => x.SaveMenuContentItem(mvcArticleMCI));
            }
        }

    }
}
