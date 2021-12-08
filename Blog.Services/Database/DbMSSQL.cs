namespace Blog.Services.Database;

public class DbMSSQL : Db, IMigrationContext
{
    public DbMSSQL(DbContextOptions options) : base(options)
    {
    }
}
