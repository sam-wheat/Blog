namespace Blog.API.Controllers;

[Route("api/[controller]")]
public class BlogController : BaseController, ISiteService
{
    protected Random random = new Random();
    protected IMemoryCache Cache;

    public BlogController(IAdaptiveClient<IServiceManifest> serviceClient, IMemoryCache cache) : base(serviceClient)
    {
        Cache = cache;
    }

    [HttpGet]
    [Route("Readme")]
    [Produces("text/html")]
    public ActionResult<string> Readme() => System.IO.File.ReadAllText("Project_Readme.html");

    [HttpGet]
    public ActionResult Index() => View("/Project_Readme.html");
    

    [HttpGet]
    [Route("GetActiveSites")]
    public async Task<List<Site>> GetActiveSites() => await ServiceClient.CallAsync(async x => await x.SiteService.GetActiveSites());
    

    [HttpGet]
    [Route("GetContentItemBySlug")]
    public async Task<ContentItem> GetContentItemBySlug(string slug, int siteID) => await ServiceClient.CallAsync(async x => await x.ContentItemService.GetContentItemBySlug(slug, siteID));
    

    [HttpGet]
    [Route("GetContentItems")]
    public async Task<List<ContentItem>> GetContentItems(int siteID, int menuID, int? groupID, DateTime? dateFilter) => await ServiceClient.CallAsync(async x => await x.ContentItemService.GetContentItems(siteID, menuID, groupID, dateFilter));


    [HttpPost]
    [Route("SaveSite")]
    public async Task<AsyncResult> SaveSite([FromBody] Site site) => await ServiceClient.CallAsync(async x => await x.SiteService.SaveSite(site));


    [HttpGet]
    [Route("GetContentItemGroups")]
    public async Task<List<KeyValuePair<String, String>>> GetContentItemGroups(string groupColumn, int menuID) => await ServiceClient.CallAsync(async x => await x.ContentItemService.GetContentItemGroups(groupColumn, menuID));


    [HttpGet]
    [Route("GetCommentsForContentItem")]
    public async Task<List<Comment>> GetCommentsForContentItem(int contentItemID) => await ServiceClient.CallAsync(x => x.CommentService.GetCommentsForContentItem(contentItemID));


    [HttpGet]
    [Route("GetCaptchaCode")]
    public JsonResult GetCaptchaCode() => Json(new { CaptchaCode = Cache.Get<string>(CacheKeyNames.CaptchaCode) });


    [HttpPost]
    [Route("SaveComment")]
    public async Task<AsyncResult<long>> SaveComment([FromBody] Comment comment, string captcha)
    {
        string code = Cache.Get<string>(CacheKeyNames.CaptchaCode);

        if (code == null || captcha != code)
            return new AsyncResult<long> { Success = false, ErrorMessage = "Please enter the numeric code." };

        return await ServiceClient.CallAsync(async x => await x.CommentService.SaveComment(comment, Cache.Get<string>(CacheKeyNames.EmailAccount), Cache.Get<string>(CacheKeyNames.EmailPassword)));
    }

    [HttpGet]
    [Route("GetCaptchaImage")]
    public ActionResult GetCaptchaImage()
    {
        string code = "";

        for (int i = 0; i < 3; i++)
            code = String.Concat(code, random.Next(10).ToString());

        Cache.Set(CacheKeyNames.CaptchaCode, code);
        CaptchaImage ci = new CaptchaImage(code, 100, 50, "Century Schoolbook");
        return new ImageResult(ci.Image, System.Drawing.Imaging.ImageFormat.Jpeg).GetFileStreamResult();
    }
}
