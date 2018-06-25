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
            registrationHelper.RegisterService<ServiceManifest, IServiceManifest>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.RegisterService<CommentService, ICommentService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.RegisterService<ContentGroupService, IContentGroupService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.RegisterService<ContentItemService, IContentItemService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.RegisterService<MenuContentItemService, IMenuContentItemService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.RegisterService<MenuService, IMenuService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);
            registrationHelper.RegisterService<SiteService, ISiteService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MSSQL);


            // MySQL
            registrationHelper.RegisterService<ServiceManifest, IServiceManifest>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.RegisterService<CommentService, ICommentService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.RegisterService<ContentGroupService, IContentGroupService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.RegisterService<ContentItemService, IContentItemService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.RegisterService<MenuContentItemService, IMenuContentItemService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.RegisterService<MenuService, IMenuService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
            registrationHelper.RegisterService<SiteService, ISiteService>(EndPointType.InProcess, API_Name.Blog, DatabaseProviderName.MySQL);
        }
    }
}
