using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using LeaderAnalytics.AdaptiveClient.EntityFramework;

namespace Blog.Core
{
    public class MSSQL_DbContextOptions : IDbContextOptions
    {
        public DbContextOptions Options { get; private set; }

        public MSSQL_DbContextOptions(string connectionString)
        {
            BuildOptions(connectionString);
        }

        private void BuildOptions(string connectionString)
        {
            var builder = new DbContextOptionsBuilder();
            builder.UseSqlServer(connectionString);
            Options = builder.Options;
        }
    }
}
