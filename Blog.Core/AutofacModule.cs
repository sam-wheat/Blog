using LeaderAnalytics.Core.AzureUtilities;
using System.Configuration;

namespace Blog.Core;

public class AutofacModule : Module
{
    private IConfiguration Configuration;

    public AutofacModule(IConfiguration Configuration)
    { 
        this.Configuration = Configuration;
    }

    protected override void Load(ContainerBuilder builder)
    {
        base.Load(builder);

        builder.Register<IEMailClient>(c =>
        {
            IComponentContext cxt = c.Resolve<IComponentContext>();
            IEMailClient e = new AzureEMailClient(Configuration);
            return e;
        }).SingleInstance();
    }
}
