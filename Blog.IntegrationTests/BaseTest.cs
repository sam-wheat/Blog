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
        EndPoints = EndPointUtilities.LoadEndPoints("EndPoints.json");
        EndPoints.First(x =>  x.API_Name == API_Name.Blog && x.ProviderName == ProviderName.MySQL).ConnectionString =
            ConnectionstringUtility.BuildConnectionString(EndPoints.First(x => x.API_Name == API_Name.Blog && x.ProviderName == ProviderName.MySQL).ConnectionString, ConnectionstringUtility.Environment.Dev, ConnectionstringUtility.Provider.MySQL);
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

    protected void InitializeAllDatabases()
    {
        foreach (IEndPointConfiguration ep in EndPoints.Where(x => x.IsActive && x.EndPointType == EndPointType.DBMS))
            Task.Run(() => DropAndRecreateDatabase(ep)).Wait();
    }

    protected async Task DropAndRecreateDatabase(IEndPointConfiguration ep)
    {
        if (ep.EndPointType != EndPointType.DBMS)
            return;

        await DatabaseUtilities.DropDatabase(ep);
        await DatabaseUtilities.ApplyMigrations(ep);
    }
}
