using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Core
{
    public class AsyncResult : IAsyncResult
    {
        public bool Success { get; set; }
        public string ErrorMessage { get; set; }
        public int ResultCount { get; set; }
    }

    public class AsyncResult<T> : AsyncResult, IAsyncResult<T>
    {
        public T Data { get; set; }
    }

}
