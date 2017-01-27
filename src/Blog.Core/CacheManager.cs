using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using Microsoft.Extensions.Caching.Distributed;

namespace Blog.Core
{
    public class CacheManager : ICacheManager
    {
        protected IDistributedCache _cache;

        public CacheManager(IDistributedCache cache)
        {
            _cache = cache;
        }

        public string GetStringValue(string key)
        {
            return Encoding.UTF8.GetString(_cache.Get(key));
        }

        public void SetStringValue(string key, string value)
        {
            _cache.Set(key, Encoding.UTF8.GetBytes(value));
        }
    }
}
