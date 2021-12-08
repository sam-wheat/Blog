namespace Blog.Services.Database;

public class DbMySQL : Db, IMigrationContext
{
    public DbMySQL(DbContextOptions options) : base(options)
    {
    }
}
