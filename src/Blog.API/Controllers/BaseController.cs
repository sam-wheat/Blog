using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Blog.Core;

namespace Blog.API.Controllers
{
    [Blog.API.ExceptionFilter]
    public abstract class BaseController : Controller
    {
        public readonly IServiceClient ServiceClient;

        public BaseController(IServiceClient serviceClient)
        {
            ServiceClient = serviceClient;
        }
    }
}
