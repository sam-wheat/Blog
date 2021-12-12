using Blog.Core;
using Blog.Domain;
using Autofac;
using LeaderAnalytics.AdaptiveClient;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;

namespace Blog.IntegrationTests;

public class BaseTest
{
    protected IContainer Container { get; private set; }
    protected IAdaptiveClient<IServiceManifest> ServiceClient { get; set; }
    protected IEnumerable<IEndPointConfiguration> EndPoints { get; set; }
    protected IDatabaseUtilities DatabaseUtilities;


    public BaseTest()
    {
        BuildContainer();
    }

    protected void BuildContainer()
    {
        EndPoints = EndPointUtilities.LoadEndPoints(Path.Combine(ConfigFileLocation.Folder, "EndPoints.development.json"));
        var builder = new ContainerBuilder();
        builder.RegisterModule(new LeaderAnalytics.AdaptiveClient.EntityFrameworkCore.AutofacModule());
        builder.RegisterModule(new Blog.Services.AutofacModule());
        builder.RegisterModule(new Blog.Core.AutofacModule());
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
