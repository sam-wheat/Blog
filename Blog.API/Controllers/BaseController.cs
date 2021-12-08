namespace Blog.API.Controllers;

[Blog.API.ExceptionFilter]
public abstract class BaseController : Controller
{
    public readonly IAdaptiveClient<IServiceManifest> ServiceClient;

    public BaseController(IAdaptiveClient<IServiceManifest> serviceClient)
    {
        ServiceClient = serviceClient;
    }
}
