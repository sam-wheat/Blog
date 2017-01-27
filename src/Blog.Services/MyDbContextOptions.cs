using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Blog.Core;

namespace Blog.Services
{
    public class MyDbContextOptions
    {
        public string connnectionString { get; private set; }
        public DbContextOptions Options { get; private set; }

        public MyDbContextOptions(INamedConnectionString conn)
        {
            connnectionString = conn.ConnectionString;
            var builder = new DbContextOptionsBuilder();
            builder.UseSqlServer(connnectionString);
            Options = builder.Options;
        }
    }
}
