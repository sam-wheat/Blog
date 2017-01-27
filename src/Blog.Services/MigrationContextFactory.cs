using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Blog.Services
{
    // This class is used by migratons to configure the db.
    public class MigrationContextFactory : IDbContextFactory<Db>
    {
        public Db Create(DbContextFactoryOptions options)
        {
            string connectionString = "Data Source=.\\SQLEXPRESS;Initial Catalog=BlogDb;Integrated Security=True;MultipleActiveResultSets=True";
            DbContextOptionsBuilder dbOptions = new DbContextOptionsBuilder();
            dbOptions.UseSqlServer(connectionString);
            Db db = new Db(dbOptions.Options);
            return db;
        }
    }
}
