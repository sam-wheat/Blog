namespace Blog.Model;

public class Site
{
    public int ID { get; set; }
    public string SiteName { get; set; }
    public string URL { get; set; }
    public bool Active { get; set; }
    public virtual ICollection<ContentGroup> ContentGroups { get; set; }
    public virtual ICollection<Menu> Menus { get; set; }
}
