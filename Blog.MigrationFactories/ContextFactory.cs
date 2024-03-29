﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Blog.Services.Database;
using Blog.Core;
using Blog.Domain;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace Blog.MigrationFactories;

public class MSSQLContextFactory : IDesignTimeDbContextFactory<DbMSSQL>
{
    public DbMSSQL CreateDbContext(string[] args)
    {
        string appPath = Path.Combine(ConfigHelper.ConfigFileFolder, "endpoints.development.json");
        string connectionString = ConnectionstringUtility.GetConnectionString(appPath, API_Name.Blog, ProviderName.MSSQL);
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
        string appPath = Path.Combine(ConfigHelper.ConfigFileFolder, "endpoints.development.json");
        string connectionString = ConnectionstringUtility.GetConnectionString(appPath, API_Name.Blog, ProviderName.MySQL);
        DbContextOptionsBuilder dbOptions = new DbContextOptionsBuilder();
        dbOptions.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString), b => b.SchemaBehavior(MySqlSchemaBehavior.Ignore));
        DbMySQL db = new DbMySQL(dbOptions.Options);
        return db;
    }
}
