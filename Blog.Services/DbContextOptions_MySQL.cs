using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;

namespace Blog.Services
{
    public class DbContextOptions_MySQL : IDbContextOptions
    {
        public DbContextOptions Options { get; set; }

        public DbContextOptions_MySQL(string connectionString)
        {
            DbContextOptionsBuilder builder = new DbContextOptionsBuilder();
            builder.UseMySql(connectionString);
            Options = builder.Options;
        }
    }
}
