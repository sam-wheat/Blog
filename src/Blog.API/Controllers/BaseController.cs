using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LeaderAnalytics.AdaptiveClient;
using Blog.Core;
using Blog.Domain;

namespace Blog.API.Controllers
{
    [Blog.API.ExceptionFilter]
    public abstract class BaseController : Controller
    {
        public readonly IAdaptiveClient<IServiceManifest> ServiceClient;

        public BaseController(IAdaptiveClient<IServiceManifest> serviceClient)
        {
            ServiceClient = serviceClient;
        }
    }
}
