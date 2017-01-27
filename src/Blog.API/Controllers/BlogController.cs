using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.AspNetCore.Http;
using Blog.Core;
using Blog.Model;
using Blog.Domain;


namespace Blog.API.Controllers
{
    [Route("api/[controller]")]
    public class BlogController : BaseController, ISiteService, ICommentService
    {
        protected Random random = new Random();
        protected ICacheManager _cacheManager;

        public BlogController(IServiceClient serviceClient, ICacheManager cacheManager) : base(serviceClient)
        {
            _cacheManager = cacheManager;

        }

        [HttpGet]
        [Route("Readme")]
        public IActionResult Readme()
        {
            return View("/Project_Readme.html");
        }


        [HttpGet]
        public async Task<ActionResult> Index()
        {
            return PartialView("Hello");
        }

        [HttpGet]
        [Route("GetActiveSites")]
        public async Task<List<Site>> GetActiveSites()
        {
            try
            {
                return await ServiceClient.OfType<ISiteService>().TryAsync(x => x.GetActiveSites());
            }
            catch (Exception ex)
            {
                string y = ex.Message;
                return null;
            }
        }

        [HttpGet]
        [Route("GetContentItemBySlug")]
        public async Task<ContentItem> GetContentItemBySlug(string slug, int siteID)
        {
            return await ServiceClient.OfType<IContentItemService>().TryAsync(x => x.GetContentItemBySlug(slug, siteID));
        }

        [HttpGet]
        [Route("GetContentItems")]
        public async Task<List<ContentItem>> GetContentItems(int siteID, int menuID, int? groupID, DateTime? dateFilter)
        {
            return await ServiceClient.OfType<IContentItemService>().TryAsync(x => x.GetContentItems(siteID, menuID, groupID, dateFilter));
        }

        [HttpPost]
        [Route("SaveSite")]
        public async Task<AsyncResult> SaveSite([FromBody] Site site)
        {
            return await ServiceClient.OfType<ISiteService>().TryAsync(x => x.SaveSite(site));
        }

        [HttpGet]
        [Route("GetContentItemGroups")]
        public async Task<List<KeyValuePair<String, String>>> GetContentItemGroups(string groupColumn, int menuID)
        {
            return await ServiceClient.OfType<IContentItemService>().TryAsync(x => x.GetContentItemGroups(groupColumn, menuID));
        }

        [HttpGet]
        [Route("SeedDB")]
        public async Task SeedDB()
        {
            await ServiceClient.OfType<ISiteService>().TryAsync(x => x.SeedDB());
            //throw new NotImplementedException();
        }

        [HttpGet]
        [Route("GetCommentsForContentItem")]
        public async Task<List<Comment>> GetCommentsForContentItem(int contentItemID)
        {
            return await ServiceClient.OfType<ICommentService>().TryAsync(x => x.GetCommentsForContentItem(contentItemID));
        }

        [HttpPost]
        [Route("SaveComment")]
        public async Task<AsyncResult<long>> SaveComment([FromBody]Comment comment, string captcha)
        {
            string code = _cacheManager.GetStringValue(CacheKeyNames.CaptchaCode);

            if (code == null || captcha != code)
                return new AsyncResult<long> { Success = false, ErrorMessage = "Please enter the numeric code." };
                

            return await ServiceClient.OfType<ICommentService>().TryAsync(x => x.SaveComment(comment, _cacheManager.GetStringValue(CacheKeyNames.EmailAccount), _cacheManager.GetStringValue(CacheKeyNames.EmailPassword)));
        }

        public async Task<AsyncResult<long>> SaveComment([FromBody]Comment comment, string emailAccount, string emailPassword)
        {
            throw new NotImplementedException(); 
        }

        [HttpGet]
        [Route("GetCaptchaCode")]
        public JsonResult GetCaptchaCode()
        {
            string code = _cacheManager.GetStringValue(CacheKeyNames.CaptchaCode);
            return Json(new { CaptchaCode = code });
        } 


        [HttpGet]
        [Route("GetCaptchaImage")]
        public ActionResult GetCaptchaImage()
        {
            string code = "";

            for (int i = 0; i < 3; i++)
                code = String.Concat(code, random.Next(10).ToString());

            _cacheManager.SetStringValue(CacheKeyNames.CaptchaCode, code);
            CaptchaImage ci = new CaptchaImage(code, 100, 50, "Century Schoolbook");
            return new ImageResult(ci.Image, System.Drawing.Imaging.ImageFormat.Jpeg).GetFileStreamResult();
        }
    }
}
