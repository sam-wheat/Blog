using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using LeaderAnalytics.AdaptiveClient.EntityFramework;

namespace Blog.Services.Database
{
    public class DbMySQL : Db, IMigrationContext
    {
        public DbMySQL(DbContextOptions options) : base(options)
        {
        }
    }
}
