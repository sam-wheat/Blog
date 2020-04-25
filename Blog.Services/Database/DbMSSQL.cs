using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;

namespace Blog.Services.Database
{
    public class DbMSSQL :Db, IMigrationContext
    {
        public DbMSSQL(DbContextOptions options) : base(options)
        {
        }
    }
}
