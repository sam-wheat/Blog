namespace Blog.Model;

public class ContentItem
{
    public int ID { get; set; }
    public ContentItemType ContentType { get; set; }
    public int? ContentGroupID { get; set; }
    public DateTime? PublishDate { get; set; }
    public DateTime? LastModifyDate { get; set; }
    public string ChangeFrequency { get; set; }
    public decimal Priority { get; set; }
    public bool Active { get; set; }
    public string Slug { get; set; }
    public string Title { get; set; }
    public string MenuText { get; set; }
    public string URL { get; set; }
    public string Abstract { get; set; }
    public string Icon { get; set; }
    public string Tags { get; set; }
    public bool AllowComments { get; set; }
    public virtual ICollection<Comment> Comments { get; set; }
    public virtual ContentGroup ContentGroup { get; set; }
    public virtual ICollection<MenuContentItem> MenuContentItems { get; set; }
}
