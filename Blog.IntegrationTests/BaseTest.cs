using Blog.Core;
using Blog.Domain;
using Autofac;
using LeaderAnalytics.AdaptiveClient;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Blog.IntegrationTests;

public class BaseTest
{
    protected IContainer Container { get; private set; }
    protected IAdaptiveClient<IServiceManifest> ServiceClient { get; set; }
    protected IEnumerable<IEndPointConfiguration> EndPoints { get; set; }
    protected IDatabaseUtilities DatabaseUtilities;


    public BaseTest()
    {
        BuildContainer().Wait();
    }

    protected async Task BuildContainer()
    {
        IConfiguration appConfig = await ConfigHelper.BuildConfig(LeaderAnalytics.Core.EnvironmentName.development);
        EndPoints = EndPointUtilities.LoadEndPoints(Path.Combine(ConfigHelper.ConfigFileFolder, "appsettings.development.json"));
        var builder = new ContainerBuilder();
        builder.RegisterModule(new LeaderAnalytics.AdaptiveClient.EntityFrameworkCore.AutofacModule());
        builder.RegisterModule(new Blog.Services.AutofacModule());
        builder.RegisterModule(new Blog.Core.AutofacModule(appConfig));
        RegistrationHelper registrationHelper = new RegistrationHelper(builder);

        registrationHelper
            .RegisterEndPoints(EndPoints)
            .RegisterModule(new Blog.Services.AdaptiveClientModule());

        Container = builder.Build();
        DatabaseUtilities = Container.Resolve<IDatabaseUtilities>();
    }

    protected async Task InitializeAllDatabases()
    {
        foreach (IEndPointConfiguration ep in EndPoints.Where(x => x.IsActive && x.EndPointType == EndPointType.DBMS))
            await DropAndRecreateDatabase(ep);
    }

    protected async Task DropAndRecreateDatabase(IEndPointConfiguration ep)
    {
        if (ep.EndPointType != EndPointType.DBMS)
            return;

        await DatabaseUtilities.DropDatabase(ep);
        await DatabaseUtilities.ApplyMigrations(ep);
    }
}
