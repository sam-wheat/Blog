using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Mail;
using Microsoft.EntityFrameworkCore;
using Blog.Core;
using Blog.Model;
using Blog.Domain;

namespace Blog.Services
{
    public class CommentService : BaseService, ICommentService
    {
        public CommentService(MyDbContextOptions options) : base(options)
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
            else if(comment.ParentID != null && db.Comments.Any(x => x.ID == comment.ParentID))
                result.ErrorMessage = "Invalid Parent ContentItem ID.";

            if (!String.IsNullOrEmpty(result.ErrorMessage))
                return result;

            comment.Date = DateTime.Now;

            if (comment.ID == 0)
                db.Comments.Add(comment);
            else
                db.AttachAsModified(comment);

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
                //Client = new SmtpClient("smtp.live.com");
                //Client.Credentials = new System.Net.NetworkCredential("sam.wheat@outlook.com", "backinblack");
                Client.Send(msg);
            }
            catch (Exception ex)
            {
                // not fatal
                // log it
            }
        }
    }
}
