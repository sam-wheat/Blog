export class Comment {
  public ID: number = 0;
  public ParentID: number | null = null;        // nullable
  public ContentItemID: number | null = null;   // null when sending email from contact page
  public Date: Date = new Date(1, 1, 1);
  public SenderName: string | null = null;
  public SenderEMail: string | null = null;
  public SenderWebsite: string | null = null;
  public SenderIPAddress: string | null = null;
  public CommentText: string | null = null;
  public Approved: boolean = false;
  public ChildComments: Comment[] | null = null;
  public ParentComment: Comment | null = null;
  public MenuItem: ContentItem | null = null;
}

export class ContentGroup {
  public ID: number = 0;
  public SiteID: number = 0;
  public Description: string | null = null;
  public Sequence: number = 0;
  public Active: boolean = false;
  public Site: Site | null = null;
  public ContentItems: ContentItem[] | null = null;
}

export class ContentItem {
  public ID: number = 0;
  public ContentType: string | null = null;
  public ContentGroupID: number = 0;
  public PublishDate: Date = new Date(1,1,1);
  public LastModifyDate: Date = new Date(1,1,1);
  public ChangeFrequency: string | null = null;
  public Priority: number = 0;
  public Active: boolean = false;
  public Slug: string | null = null;
  public Title: string | null = null;
  public MenuText: string | null = null;
  public URL: string | null = null;
  public Abstract: string | null = null;
  public Icon: string | null = null;
  public Tags: string | null = null;
  public AllowComments: boolean = true;
  public Comments: Comment[] | null = null;
  public ContentGroup: ContentGroup | null = null;
  public MenuContentItems: MenuContentItem[] | null = null;
}

export class MenuContentItem {
  public ID: number = 0;
  public MenuID: number = 0;
  public ContentItemID: number = 0;
  public Sequence: number = 0;
  public ContentItem: ContentItem | null = null;
  public Menu: Menu | null = null;
}

export class Menu {
  public ID: number = 0;
  public SiteID: number = 0;
  public MenuName: string | null = null;
  public Site: Site | null = null;
  public MenuContentItems: MenuContentItem[] | null = null;
}

export class Site {
  public ID: number = 0;
  public SiteName: string | null = null;
  public URL: string | null = null;
  public Active: boolean = false;
  public ContentGroups: ContentGroup[] | null = null;
  public Menus: Menu[] | null = null;
}

export class KeyValuePair {
  public Key: string = "";
  public Value: string = "";
}

export class AsyncResult {
  public Success: boolean = false;
  public ErrorMessage: string | null = null;
  public ResultCount: number = 0;
  public Data: any;
}

export enum SideNavMode { Site, PostIndex, Post };
