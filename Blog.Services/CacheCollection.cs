using System;
using System.Collections.Generic;
using System.Text;
using LeaderAnalytics.Caching;
using Blog.Domain;
using Blog.Model;

namespace Blog.Services
{
    class CacheCollection : ICacheCollection
    {
        public ICache<string> CaptchaCache { get; }
        public ICache<List<Site>> SiteCache { get; }
        public ICache<ContentItem> ContentItemCache { get; }
        public ICache<List<ContentItem>> ContentItemListCache { get; }
        public ICache<List<KeyValuePair<String, String>>> ContentGroupCache { get; }

        public CacheCollection()
        {
            CaptchaCache = new Cache<string>();
            SiteCache = new Cache<List<Site>>();
            ContentItemCache = new Cache<ContentItem>();
            ContentItemListCache = new Cache<List<ContentItem>>();
            ContentGroupCache = new Cache<List<KeyValuePair<String, String>>>();
        }
    }
}
