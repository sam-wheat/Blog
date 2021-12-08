namespace Blog.Services;

public class DbContextOptions_MySQL : IDbContextOptions
{
    public DbContextOptions Options { get; set; }

    public DbContextOptions_MySQL(string connectionString)
    {
        DbContextOptionsBuilder builder = new DbContextOptionsBuilder();
        builder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString), b => b.SchemaBehavior(MySqlSchemaBehavior.Ignore));
        Options = builder.Options;
    }
}
