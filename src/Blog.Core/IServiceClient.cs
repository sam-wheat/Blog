using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core
{
    public interface IServiceClient
    {
        ServiceCallWrapper<T> OfType<T>() where T : class, IDisposable;
    }


    public interface IServiceCallWrapper<T> where T : class, IDisposable
    {
        void Try(Action<T> method);
        TResult Try<TResult>(Func<T, TResult> method);
        Task TryAsync(Func<T, Task> method);
        Task<TResult> TryAsync<TResult>(Func<T, Task<TResult>> method);
    }
}
