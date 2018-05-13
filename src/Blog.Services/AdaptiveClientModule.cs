using System;
using System.Collections.Generic;
using System.Text;
using LeaderAnalytics.AdaptiveClient;
using Blog.Core;
using Blog.Domain;
using Blog.Services.MSSQL;


namespace Blog.Services
{
    public class AdaptiveClientModule : IAdaptiveClientModule
    {
        public void Register(RegistrationHelper registrationHelper)
        {
            
            // MSSQL
            registrationHelper.Register<ServiceManifest, IServiceManifest>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.Register<CommentService, ICommentService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.Register<ContentGroupService, IContentGroupService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.Register<ContentItemService, IContentItemService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.Register<MenuContentItemService, IMenuContentItemService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.Register<MenuService, IMenuService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.Register<SiteService, ISiteService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);


            // MySQL
            registrationHelper.Register<ServiceManifest, IServiceManifest>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.Register<CommentService, ICommentService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.Register<ContentGroupService, IContentGroupService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.Register<ContentItemService, IContentItemService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.Register<MenuContentItemService, IMenuContentItemService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.Register<MenuService, IMenuService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.Register<SiteService, ISiteService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
        }
    }
}
