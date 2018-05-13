using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Model;
using Blog.Core;
using LeaderAnalytics.AdaptiveClient.EntityFramework;

namespace Blog.Services.Database.DataInitalizers
{
    public class SiteDataInitalizer : IDatabaseInitializer
    {
        private Db db;

        public SiteDataInitalizer(Db db)
        {
            this.db = db;
        }

        public async Task Seed(string migrationName)
        {
            Site site = new Site { SiteName = "Sams Blog", Active = true, Menus = new List<Menu>(), URL = "www.samwheat.com", ContentGroups = new List<ContentGroup>() };
            db.Sites.Add(site);
            await db.SaveChangesAsync();

            ContentGroup netContentGroup = new ContentGroup { Description = "Software Development", Sequence = 1, Active = true, Site = site, ContentItems = new List<ContentItem>() };
            ContentGroup econContentGroup = new ContentGroup { Description = "Finance & Economics", Sequence = 2, Active = true, Site = site, ContentItems = new List<ContentItem>() };
            ContentGroup hikingContentGroup = new ContentGroup { Description = "Hiking", Sequence = 3, Active = true, Site = site, ContentItems = new List<ContentItem>() };
            ContentGroup personalDevContentGroup = new ContentGroup { Description = "Personal Development", Sequence = 4, Active = true, Site = site, ContentItems = new List<ContentItem>() };
            ContentGroup fredContentGroup = new ContentGroup { Description = "FRED API", Sequence = 5, Active = true, Site = site, ContentItems = new List<ContentItem>() };

            db.ContentGroups.Add(netContentGroup);
            db.ContentGroups.Add(econContentGroup);
            db.ContentGroups.Add(hikingContentGroup);
            db.ContentGroups.Add(personalDevContentGroup);
            db.ContentGroups.Add(fredContentGroup);
            await db.SaveChangesAsync();


            Menu navBar = new Menu { MenuName = "NavBar", Site = site };
            Menu sideBar = new Menu { MenuName = "SideBar", Site = site };
            Menu blogIndex = new Menu { MenuName = "BlogIndex", Site = site };

            db.Menus.Add(navBar);
            db.Menus.Add(sideBar);
            db.Menus.Add(blogIndex);
            await db.SaveChangesAsync();


            site.Menus.Add(navBar);
            site.Menus.Add(sideBar);
            site.Menus.Add(blogIndex);
            site.ContentGroups.Add(netContentGroup);
            site.ContentGroups.Add(econContentGroup);
            site.ContentGroups.Add(hikingContentGroup);

            await db.SaveChangesAsync();

            MenuContentItem homeLinkMCI = new MenuContentItem { Menu = navBar, Sequence = 1 };
            MenuContentItem aboutLinkMCI = new MenuContentItem { Menu = navBar, Sequence = 2 };
            MenuContentItem blogLinkMCI = new MenuContentItem { Menu = navBar, Sequence = 3 };
            MenuContentItem contactLinkMCI = new MenuContentItem { Menu = navBar, Sequence = 4 };


            db.MenuContentItems.Add(homeLinkMCI);
            db.MenuContentItems.Add(aboutLinkMCI);
            db.MenuContentItems.Add(blogLinkMCI);
            db.MenuContentItems.Add(contactLinkMCI);

            ContentItem contactLinkCI = new ContentItem { Active = true, MenuText = "Contact", URL = "/Contact", ContentType = ContentItemType.MenuItem,  MenuContentItems = new List<MenuContentItem>() };
            ContentItem aboutLinkCI = new ContentItem {Active = true, MenuText = "About", URL = "/About", ContentType = ContentItemType.MenuItem,  MenuContentItems = new List<MenuContentItem>() };
            ContentItem blogLinkCI = new ContentItem { Active = true, MenuText = "Blog", URL="/BlogIndex", ContentType = ContentItemType.MenuItem, MenuContentItems = new List<MenuContentItem>() };
            ContentItem homeLinkCI = new ContentItem { Active = true, MenuText = "Home", URL="/", ContentType = ContentItemType.MenuItem,  MenuContentItems = new List<MenuContentItem>() };

            homeLinkCI.MenuContentItems.Add(homeLinkMCI);
            aboutLinkCI.MenuContentItems.Add(aboutLinkMCI);
            blogLinkCI.MenuContentItems.Add(blogLinkMCI);
            contactLinkCI.MenuContentItems.Add(contactLinkMCI);

            homeLinkMCI.ContentItem = homeLinkCI;
            aboutLinkMCI.ContentItem = aboutLinkCI;
            blogLinkMCI.ContentItem = blogLinkCI;
            contactLinkMCI.ContentItem = contactLinkCI;

            await db.SaveChangesAsync();

            ContentItem post1 = new ContentItem
            {
                Active = true,
                Abstract = "A brief overview of how this site is constructed.",
                AllowComments = true,
                ContentGroup = netContentGroup,
                PublishDate = new DateTime(2016, 8, 20),
                Icon = "peekaboo.jpg",
                Slug = "Hello-World",
                URL = "helloWorld/helloWorld.html",
                Title = "Hello World",
                ContentType = ContentItemType.Post,
                MenuContentItems = new List<MenuContentItem>()
            };

            ContentItem post2 = new ContentItem
            {
                Active = true,
                Abstract = "Demonstrates how to subclass ItemsControl so lists can implement features such as alternating background colors.",
                AllowComments = true,
                ContentGroup = netContentGroup,
                PublishDate = new DateTime(2012, 11, 22),
                Icon = "alternating-stack-towels2.gif",
                Slug = "How-to-create-alternating-items-with-an-ItemsControl",
                URL = "altItems/altItems.html",
                Title = "How to create alternating items with an ItemsControl",
                ContentType = ContentItemType.Post,
                MenuContentItems = new List<MenuContentItem>()
            };

            ContentItem post3 = new ContentItem
            {
                Active = true,
                Abstract = "Dont trust an application level exception handler to catch exceptions on worker threads!",
                AllowComments = true,
                ContentGroup = netContentGroup,
                PublishDate = new DateTime(2013, 7, 5),
                Icon = "bus_crash.jpg",
                Slug = "AppDomain-UnhandledException-is-not-raised-when-an-exception-is-thrown-on-a-worker-thread",
                URL = "exHandler/exHandler.html",
                Title = "AppDomain.UnhandledException is not raised when an exception is thrown on a worker thread",
                ContentType = ContentItemType.Post,
                MenuContentItems = new List<MenuContentItem>()
            };

            ContentItem post4 = new ContentItem
            {
                Active = true,
                Abstract = "A generic algorithm for choosing combinations of items from a collection is used to solve a business problem.",
                AllowComments = true,
                ContentGroup = netContentGroup,
                PublishDate = new DateTime(2013, 7, 6),
                Icon = "cargo_ship.jpg",
                Slug = "A-Combination-Finder-for-solving-business-problems",
                URL = "comboFinder/comboFinder.html",
                Title = "A Combination Finder for solving business problems",
                ContentType = ContentItemType.Post,
                MenuContentItems = new List<MenuContentItem>()
            };

            ContentItem post5 = new ContentItem
            {
                Active = true,
                Abstract = "How to implement Basic Authentication and SSL for RESTful services",
                AllowComments = true,
                ContentGroup = netContentGroup,
                PublishDate = new DateTime(2014, 9, 10),
                Icon = "padlock.jpg",
                Slug = "Implementing-Basic-Authentication-and-SSL-for-RESTful-services",
                URL = "basicSSL/basicSSL.html",
                Title = "Implementing Basic Authentication and SSL for RESTful services",
                ContentType = ContentItemType.Post,
                MenuContentItems = new List<MenuContentItem>()
            };

            ContentItem post6 = new ContentItem
            {
                Active = true,
                Abstract = "Build a Business Logic layer that will expose services to desktop and web applications.  Automatically detect if client is connecting over a Local Area Network and transport data in-process using sqlClient. Transparently connect via WCF or REST if client is remote.",
                AllowComments = true,
                ContentGroup = netContentGroup,
                PublishDate = new DateTime(2014, 10, 8),
                Icon = "red_blob.jpg",
                Slug = "A-service-oriented-approach-to-implementing-repository-pattern-with-Entity-Framework- MVC- and-MVVM",
                URL = "busLogicLayer/busLogicLayer.html",
                Title = "A service oriented approach to implementing repository pattern with Entity Framework, MVC, and MVVM",
                ContentType = ContentItemType.Post,
                MenuContentItems = new List<MenuContentItem>()
            };

            ContentItem post7 = new ContentItem
            {
                Active = true,
                Abstract = "Why you need to know the difference between FRED mode and ALFRED mode when using the FRED API",
                AllowComments = true,
                ContentGroup = netContentGroup,
                PublishDate = new DateTime(2014, 1, 2),
                Icon = "gorilla.jpg",
                Slug = "FRED-mode-vs-ALFRED-mode",
                URL = "fredMode/fredMode.html",
                Title = "Functional differences between FRED mode and ALFRED mode",
                ContentType = ContentItemType.Post,
                MenuContentItems = new List<MenuContentItem>()
            };

            ContentItem post8 = new ContentItem
            {
                Active = true,
                Abstract = "",
                AllowComments = true,
                ContentGroup = netContentGroup,
                PublishDate = new DateTime(2015, 1, 1),
                Icon = "",
                Slug = "",
                URL = "x.html",
                Title = "",
                ContentType = ContentItemType.Post,
                MenuContentItems = new List<MenuContentItem>()
            };

            db.ContentItems.Add(post1);
            db.ContentItems.Add(post2);
            db.ContentItems.Add(post3);
            db.ContentItems.Add(post4);
            db.ContentItems.Add(post5);
            db.ContentItems.Add(post6);
            db.ContentItems.Add(post7);
            await db.SaveChangesAsync();


            netContentGroup.ContentItems.Add(post1);
            netContentGroup.ContentItems.Add(post2);
            netContentGroup.ContentItems.Add(post3);
            netContentGroup.ContentItems.Add(post4);
            netContentGroup.ContentItems.Add(post5);
            netContentGroup.ContentItems.Add(post6);
            fredContentGroup.ContentItems.Add(post7);
            MenuContentItem post1MCI = new MenuContentItem { Menu = blogIndex, Sequence = 1, ContentItem = post1 };
            MenuContentItem post2MCI = new MenuContentItem { Menu = blogIndex, Sequence = 2, ContentItem = post2 };
            MenuContentItem post3MCI = new MenuContentItem { Menu = blogIndex, Sequence = 3, ContentItem = post3 };
            MenuContentItem post4MCI = new MenuContentItem { Menu = blogIndex, Sequence = 4, ContentItem = post4 };
            MenuContentItem post5MCI = new MenuContentItem { Menu = blogIndex, Sequence = 5, ContentItem = post5 };
            MenuContentItem post6MCI = new MenuContentItem { Menu = blogIndex, Sequence = 6, ContentItem = post6 };
            MenuContentItem post7MCI = new MenuContentItem { Menu = blogIndex, Sequence = 7, ContentItem = post7 };

            post1.MenuContentItems.Add(post1MCI);
            post2.MenuContentItems.Add(post2MCI);
            post3.MenuContentItems.Add(post3MCI);
            post4.MenuContentItems.Add(post4MCI);
            post5.MenuContentItems.Add(post5MCI);
            post6.MenuContentItems.Add(post6MCI);
            post7.MenuContentItems.Add(post7MCI);

            db.MenuContentItems.Add(post1MCI);
            db.MenuContentItems.Add(post2MCI);
            db.MenuContentItems.Add(post3MCI);
            db.MenuContentItems.Add(post4MCI);
            db.MenuContentItems.Add(post5MCI);
            db.MenuContentItems.Add(post6MCI);
            db.MenuContentItems.Add(post7MCI);
            await db.SaveChangesAsync();

            post1.MenuContentItems.Add(post1MCI);
            post2.MenuContentItems.Add(post2MCI);
            post3.MenuContentItems.Add(post3MCI);
            post4.MenuContentItems.Add(post4MCI);
            post5.MenuContentItems.Add(post5MCI);
            post6.MenuContentItems.Add(post6MCI);
            post7.MenuContentItems.Add(post7MCI);
            await db.SaveChangesAsync();
        }
    }
}
