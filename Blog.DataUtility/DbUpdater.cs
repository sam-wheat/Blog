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
            //Site site = ServiceClient.OfType<ISiteService>().TryAsync(x => x.GetActiveSites()).Result.First(x => x.SiteName == "Sams Blog");
            //List<ContentGroup> contentGroups = await ServiceClient.OfType<IContentGroupService>().TryAsync(x => x.GetContentGroupsForSite(site.ID));
            //ContentGroup netContentGroup = contentGroups.Single(x => x.Description == "Software Development");
            //List<Menu> menus = await ServiceClient.OfType<IMenuService>().TryAsync(x => x.GetMenusForSite(site.ID));
            //Menu blogIndexMenu = menus.Single(x => x.MenuName == "BlogIndex");
            //List<ContentItem> contentItems = await ServiceClient.OfType<IContentItemService>().TryAsync(x => x.GetContentItems(site.ID, blogIndexMenu.ID, null, null));

            //ContentItem article = contentItems.SingleOrDefault(x => x.ID == 13);

            //if (article != null)
            //{
             //   article.Slug = "Library-and-pattern-for-consuming-services-across-heterogeneous-platforms-and-protocols";
            //    article.Title = "AdaptiveClient - Library and pattern for consuming services across heterogeneous platforms and protocols";
             //   article.Abstract = "Library and pattern for consuming services across heterogeneous platforms and protocols.  Inject a single client that allows an application to transparently access APIs using SQL client, WebAPI, REST, WCF, ESB, etc. Gracefully fall back if preferred server or protocol becomes unavailable.";

                //AsyncResult result = await ServiceClient.OfType<IContentItemService>().TryAsync(x => x.SaveContentItem(article));
              
            //}
        }

    }
}
