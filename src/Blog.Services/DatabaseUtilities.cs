using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Blog.Domain;

namespace Blog.Services
{
    public class DatabaseUtilities : BaseService, IDatabaseUtilities
    {
        public DatabaseUtilities(MyDbContextOptions options) : base(options)
        {
        }

        public void CreateOrUpdateDatabase()
        {
            bool dbExists = (db.GetService<IDatabaseCreator>() as RelationalDatabaseCreator).Exists();

            if (!dbExists)
            {
                db.Database.EnsureCreated();
                new Integration.SiteSeed().SeedDB(db).Wait();
            }
        }
    }
}
