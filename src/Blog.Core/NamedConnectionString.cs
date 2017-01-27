using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Core
{
    public class NamedConnectionString : INamedConnectionString
    {
        public string ConnectionString { get; set; }
    }
}
