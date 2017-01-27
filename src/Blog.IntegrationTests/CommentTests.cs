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
        public void CommentTest()
        {
            List<Comment> comments = ServiceClient.OfType<ICommentService>().TryAsync(x => x.GetCommentsForContentItem(1)).Result;
        }


        [Test]
        public void CommentTest2()
        {
            List<Comment> comments = ServiceClient.OfType<ICommentService>().TryAsync(x => x.GetCommentsForContentItem(1)).Result;
        }
    }
}
