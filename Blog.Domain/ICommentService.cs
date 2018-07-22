using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Blog.Model;
using Blog.Core;

namespace Blog.Domain
{
    public interface ICommentService : IDisposable
    {
        Task<List<Comment>> GetCommentsForContentItem(int contentItemID);
        Task<AsyncResult<long>> SaveComment(Comment comment, string emailAccount, string emailPassword);
    }
}