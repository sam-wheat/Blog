namespace Blog.Domain;

public interface ICommentService : IDisposable
{
    Task<List<Comment>> GetCommentsForContentItem(int contentItemID);
    Task<AsyncResult<long>> SaveComment(Comment comment, string emailAccount, string emailPassword);
}
