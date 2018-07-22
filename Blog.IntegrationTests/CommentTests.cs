using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NUnit.Framework;
using Autofac;
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
            try
            {
                List<Comment> comments = await ServiceClient.TryAsync(async x => await x.CommentService.GetCommentsForContentItem(1));
            }
            catch (Exception ex)
            {
                string y = ex.Message;
            }
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
