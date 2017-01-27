using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Domain
{
    public interface IDatabaseUtilities: IDisposable
    {
        void CreateOrUpdateDatabase();
    }
}
