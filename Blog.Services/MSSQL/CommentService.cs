namespace Blog.Services.MSSQL;

public class CommentService : BaseService, ICommentService
{
    public CommentService(Db db, IServiceManifest serviceManifest, ICacheCollection cache) : base(db, serviceManifest, cache)
    {
    }

    public async Task<List<Comment>> GetCommentsForContentItem(int contentItemID)
    {
        return await db.Comments.Where(x => x.ContentItemID == contentItemID).OrderByDescending(x => x.Date).ToListAsync();
    }

    public async Task<AsyncResult<long>> SaveComment(Comment comment, string emailAccount, string emailPassword)
    {
        AsyncResult<long> result = new AsyncResult<long>();

        if (String.IsNullOrEmpty(comment.CommentText))
            result.ErrorMessage = "Comment text is required.";
        else if (comment.ContentItemID != null && !db.ContentItems.Any(x => x.ID == comment.ContentItemID))
            result.ErrorMessage = "Invalid ContentItem ID.";
        else if (comment.ParentID != null && db.Comments.Any(x => x.ID == comment.ParentID))
            result.ErrorMessage = "Invalid Parent ContentItem ID.";

        if (!String.IsNullOrEmpty(result.ErrorMessage))
            return result;

        comment.Date = DateTime.Now;
        db.Entry(comment).State = comment.ID == 0 ? EntityState.Added : EntityState.Modified;
        await db.SaveChangesAsync();
        result.Data = comment.ID;
        result.Success = true;
        SendEmailNotice(emailAccount, emailPassword, new string[] { "sam.wheat@outlook.com" }, comment.SenderEMail, comment.ContentItemID ?? 0, comment.SenderName, comment.CommentText);
        return result;
    }

    private void SendEmailNotice(string emailAccount, string emailPassword, string[] to, string from, int contentMappingID, string userName, string commentText)
    {
        MailMessage msg = new MailMessage();

        for (int i = 0; i < to.Length; i++)
            msg.To.Add(to[i]);

        msg.From = new MailAddress("sam.wheat@outlook.com");
        msg.Subject = "A comment was posted on your website";

        if (contentMappingID > 0)
            msg.Subject += (" on page " + db.ContentItems.Where(x => x.ID == contentMappingID).Single().Title);

        msg.Body = "By User Name: " + userName + Environment.NewLine +
            "Email address: " + from + Environment.NewLine +
            "Comment: " + commentText;

        try
        {
            SmtpClient Client;
            Client = new SmtpClient("smtp-mail.outlook.com");
            Client.Port = 587;  // this causes smtp permission error on winhost 
            Client.EnableSsl = true;
            Client.Credentials = new System.Net.NetworkCredential(emailAccount, emailPassword);
            Client.Send(msg);
            Log.Information("Email message from {from} was sent successfully.", from);
        }
        catch (Exception ex)
        {
            // not fatal jst log it
            Log.Error("An Exception was encountered while sending an email.  The error is: {err}", ex.ToString());
        }
    }
}
