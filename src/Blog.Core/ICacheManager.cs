namespace Blog.Core
{
    public interface ICacheManager
    {
        string GetStringValue(string key);
        void SetStringValue(string key, string value);
    }
}