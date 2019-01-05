using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Blog.Services.Database;
using Blog.Core;
using Blog.Domain;

namespace Blog.MigrationFactories
{
    
    public class MSSQLContextFactory : IDesignTimeDbContextFactory<DbMSSQL>
    {
        public DbMSSQL CreateDbContext(string[] args)
        {
            string connectionString = ConnectionstringUtility.BuildConnectionString(ConnectionstringUtility.GetConnectionString("bin\\debug\\netcoreapp2.0\\EndPoints.json", API_Name.Blog, ProviderName.MSSQL), ConnectionstringUtility.Environment.Prod, ConnectionstringUtility.Provider.MSSQL);
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
            string connectionString = ConnectionstringUtility.BuildConnectionString(ConnectionstringUtility.GetConnectionString("bin\\debug\\netcoreapp2.0\\EndPoints.json", API_Name.Blog, ProviderName.MySQL), ConnectionstringUtility.Environment.Prod, ConnectionstringUtility.Provider.MySQL);
            DbContextOptionsBuilder dbOptions = new DbContextOptionsBuilder();
            dbOptions.UseMySql(connectionString);
            DbMySQL db = new DbMySQL(dbOptions.Options);
            return db;
        }
    }
}
