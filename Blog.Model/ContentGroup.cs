namespace Blog.Model;

public class ContentGroup
{
    public int ID { get; set; }
    public int SiteID { get; set; }
    public string Description { get; set; }
    public int Sequence { get; set; }
    public bool Active { get; set; }
    public virtual Site Site { get; set; }
    public virtual ICollection<ContentItem> ContentItems { get; set; }
}
