using System;
using System.Collections.Generic;
using System.Text;
using LeaderAnalytics.Caching;
using Blog.Domain;

namespace Blog.Services
{
    class CacheCollection : ICacheCollection
    {
        public ICache<string> CaptchaCache { get; }

        public CacheCollection()
        {
            CaptchaCache = new Cache<string>();
        }
    }
}
