namespace Blog.Model;

public class Comment
{
    public long ID { get; set; }
    public long? ParentID { get; set; }
    public int? ContentItemID { get; set; }
    public DateTime Date { get; set; }
    public string SenderName { get; set; }
    public string SenderEMail { get; set; }
    public string SenderWebsite { get; set; }
    public string SenderIPAddress { get; set; }
    public string CommentText { get; set; }
    public bool Approved { get; set; }
    public virtual ICollection<Comment> ChildComments { get; set; }
    public virtual Comment ParentComment { get; set; }
    public virtual ContentItem ContentItem { get; set; }
}
