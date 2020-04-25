using System;
using System.Collections.Generic;
using System.Text;
using LeaderAnalytics.Caching;
using Blog.Model;


namespace Blog.Domain
{
    public interface ICacheCollection
    {
        ICache<string> CaptchaCache { get; }  
        ICache<List<Site>> SiteCache { get; }
        ICache<ContentItem> ContentItemCache { get; }
        ICache<List<ContentItem>> ContentItemListCache { get; }
        ICache<List<KeyValuePair<String, String>>> ContentGroupCache { get; }
    }
}
