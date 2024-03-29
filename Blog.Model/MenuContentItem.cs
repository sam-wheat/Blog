﻿namespace Blog.Model;

public class MenuContentItem
{
    public int ID { get; set; }
    public int MenuID { get; set; }
    public int ContentItemID { get; set; }
    public int Sequence { get; set; }

    public virtual ContentItem ContentItem { get; set; }
    public virtual Menu Menu { get; set; }
}
