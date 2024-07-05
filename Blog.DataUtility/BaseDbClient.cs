namespace Blog.DataUtility;

public abstract class BaseDbClient
{
    protected IContainer container { get; private set; }
    protected IConfiguration appConfig { get; private set; }
    //protected IServiceClient ServiceClient { get; private set; }

    public BaseDbClient(string env)
    {
        if (env != "development" && env != "prod")
            throw new Exception("environment variable must be \"prod\" or \"development\".");

        CreateServiceClient(env);
        BuildContainer();
     
    }

    protected void BuildContainer()
    {
        ContainerBuilder builder = new ContainerBuilder();
        builder.RegisterModule(new Blog.Services.AutofacModule());
        builder.RegisterModule(new Blog.Core.AutofacModule(appConfig));
        container = builder.Build();
    }

    protected void CreateServiceClient(string env)
    {
        INamedConnectionString conn = container.Resolve<INamedConnectionString>();
        IConfigurationBuilder builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings." + env + ".json");
        appConfig = builder.Build();

        conn.ConnectionString = appConfig["Data:ConnectionString"];
        //ServiceClient = container.Resolve<IServiceClient>();
    }
}
