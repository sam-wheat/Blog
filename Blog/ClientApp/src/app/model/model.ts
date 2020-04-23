export class Comment {
  public ID: number = 0;
  public ParentID: number = null; // nullable
  public ContentItemID: number = 0;
  public Date: Date = new Date(1, 1, 1);
  public SenderName: string = null;
  public SenderEMail: string = null;
  public SenderWebsite: string = null;
  public SenderIPAddress: string = null;
  public CommentText: string = null;
  public Approved: boolean = false;
  public ChildComments: Comment[];
  public ParentComment: Comment;
  public MenuItem: ContentItem;
}

export class ContentGroup {
  public ID: number;
  public SiteID: number;
  public Description: string;
  public Sequence: number;
  public Active: boolean;
  public Site: Site;
  public ContentItems: ContentItem[];
}

export class ContentItem {
  public ID: number;
  public ContentType: string;
  public ContentGroupID: number;
  public PublishDate: Date;
  public LastModifyDate: Date;
  public ChangeFrequency: string;
  public Priority: number;
  public Active: boolean;
  public Slug: string;
  public Title: string;
  public MenuText: string;
  public URL: string;
  public Abstract: string;
  public Icon: string;
  public Tags: string;
  public AllowComments: boolean;
  public Comments: Comment[];
  public ContentGroup: ContentGroup;
  public MenuContentItems: MenuContentItem[];
}

export class MenuContentItem {
  public ID: number;
  public MenuID: number;
  public ContentItemID: number;
  public Sequence: number;
  public ContentItem: ContentItem;
  public Menu: Menu;
}

export class Menu {
  public ID: number;
  public SiteID: number;
  public MenuName: string;
  public Site: Site;
  public MenuContentItems: MenuContentItem[];
}

export class Site {
  public ID: number;
  public SiteName: string;
  public URL: string;
  public Active: boolean;
  public ContentGroups: ContentGroup[];
  public Menus: Menu[];
}

export class KeyValuePair {
  public Key: string;
  public Value: string;
}

export class AsyncResult {
  public Success: boolean;
  public ErrorMessage: string;
  public ResultCount: number;
  public Data: any;
}

export enum SideNavMode { Site, PostIndex, Post };
