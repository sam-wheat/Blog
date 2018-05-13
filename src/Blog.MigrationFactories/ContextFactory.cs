using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Blog.Services.Database;


namespace Blog.MigrationFactories
{
    
    public class MSSQLContextFactory : IDesignTimeDbContextFactory<DbMSSQL>
    {
        public DbMSSQL CreateDbContext(string[] args)
        {
            string connectionString = "Data Source=.\\SQLServer;Initial Catalog=Blog;Integrated Security=True;MultipleActiveResultSets=True";
            DbContextOptionsBuilder dbOptions = new DbContextOptionsBuilder();
            dbOptions.UseSqlServer(connectionString);
            DbMSSQL db = new DbMSSQL(dbOptions.Options);
            return db;
        }
    }


    public class MySQLContextFactory : IDesignTimeDbContextFactory<DbMySQL>
    {
        public DbMySQL CreateDbContext(string[] args)
        {
            string connectionString = "Data Source=.\\SQLServer;Initial Catalog=Blog;Integrated Security=True;MultipleActiveResultSets=True";
            DbContextOptionsBuilder dbOptions = new DbContextOptionsBuilder();
            dbOptions.UseSqlServer(connectionString);
            DbMySQL db = new DbMySQL(dbOptions.Options);
            return db;
        }
    }
}
