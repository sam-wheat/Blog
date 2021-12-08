namespace Blog.Services;

public class AutofacModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        base.Load(builder);

        builder.RegisterType<CacheCollection>().As<ICacheCollection>().SingleInstance();

    }
}
