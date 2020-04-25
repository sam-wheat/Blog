using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NUnit.Framework;
using Autofac;
using LeaderAnalytics.AdaptiveClient;
using Blog.Model;
using Blog.Core;
using Blog.Domain;

namespace Blog.IntegrationTests
{
    [TestFixture]
    public class CommentTests: BaseTest
    {
        [Test]
        public async Task CommentTest()
        {
            ServiceClient = Container.Resolve<IAdaptiveClient<IServiceManifest>>();
            List<KeyValuePair<string,string>> c1 = await ServiceClient.TryAsync(async x => await x.ContentItemService.GetContentItemGroups("PubDate",1));
            List<KeyValuePair<string, string>> c2 = await ServiceClient.TryAsync(async x => await x.ContentItemService.GetContentItemGroups("GroupID", 1));
            Assert.AreEqual(1, 1);
        }


        [Test]
        public void CommentTest2()
        {
            //List<Comment> comments = ServiceClient.OfType<ICommentService>().TryAsync(x => x.GetCommentsForContentItem(1)).Result;
            InitializeAllDatabases();
        }
    }
}
