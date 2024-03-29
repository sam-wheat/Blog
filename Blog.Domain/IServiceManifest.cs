﻿namespace Blog.Domain;

public interface IServiceManifest : IDisposable
{
    ICommentService CommentService { get; }
    IContentGroupService ContentGroupService { get; }
    IContentItemService ContentItemService { get; }
    IMenuContentItemService MenuContentItemService { get; }
    IMenuService MenuService { get; }
    ISiteService SiteService { get; }
}
