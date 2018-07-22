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
    }
}
