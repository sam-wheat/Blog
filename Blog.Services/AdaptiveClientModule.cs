using System;
using System.Collections.Generic;
using System.Text;
using LeaderAnalytics.AdaptiveClient;
using LeaderAnalytics.AdaptiveClient.Utilities;
using Blog.Core;
using Blog.Domain;
using Blog.Services.MSSQL;
using Blog.Services.Database;

namespace Blog.Services
{
    public class AdaptiveClientModule : IAdaptiveClientModule
    {
        public void Register(RegistrationHelper registrationHelper)
        {
            registrationHelper

            // MSSQL Services
            .RegisterService<ServiceManifest, IServiceManifest>(EndPointType.DBMS, API_Name.Blog, ProviderName.MSSQL)
            .RegisterService<CommentService, ICommentService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MSSQL)
            .RegisterService<ContentGroupService, IContentGroupService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MSSQL)
            .RegisterService<ContentItemService, IContentItemService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MSSQL)
            .RegisterService<MenuContentItemService, IMenuContentItemService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MSSQL)
            .RegisterService<MenuService, IMenuService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MSSQL)
            .RegisterService<SiteService, ISiteService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MSSQL)

            // MySQL Services
            .RegisterService<ServiceManifest, IServiceManifest>(EndPointType.DBMS, API_Name.Blog, ProviderName.MySQL)
            .RegisterService<CommentService, ICommentService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MySQL)
            .RegisterService<ContentGroupService, IContentGroupService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MySQL)
            .RegisterService<ContentItemService, IContentItemService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MySQL)
            .RegisterService<MenuContentItemService, IMenuContentItemService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MySQL)
            .RegisterService<MenuService, IMenuService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MySQL)
            .RegisterService<SiteService, ISiteService>(EndPointType.DBMS, API_Name.Blog, ProviderName.MySQL)

            // DbContext
            .RegisterDbContext<Db>(API_Name.Blog)

            // Migration Contexts
            .RegisterMigrationContext<DbMSSQL>(API_Name.Blog, ProviderName.MSSQL)
            .RegisterMigrationContext<DbMySQL>(API_Name.Blog, ProviderName.MySQL)

            // Database Initializers
            .RegisterDatabaseInitializer<DatabaseInitializer>(API_Name.Blog, ProviderName.MSSQL)
            .RegisterDatabaseInitializer<DatabaseInitializer>(API_Name.Blog, ProviderName.MySQL)

            // Service Manifests
            .RegisterServiceManifest<ServiceManifest, IServiceManifest>(EndPointType.DBMS, API_Name.Blog, ProviderName.MSSQL)
            .RegisterServiceManifest<ServiceManifest, IServiceManifest>(EndPointType.DBMS, API_Name.Blog, ProviderName.MySQL)

            // EndPoint Validator
            .RegisterEndPointValidator<MSSQL_EndPointValidator>(EndPointType.DBMS, ProviderName.MSSQL)
            .RegisterEndPointValidator<MySQL_EndPointValidator>(EndPointType.DBMS, ProviderName.MySQL)

            // DbContextOptions
            .RegisterDbContextOptions<DbContextOptions_MSSQL>(ProviderName.MSSQL)
            .RegisterDbContextOptions<DbContextOptions_MySQL>(ProviderName.MySQL);
        }
    }
}
