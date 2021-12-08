namespace Blog.Services;

public class DbContextOptions_MSSQL : IDbContextOptions
{
    public DbContextOptions Options { get; private set; }

    public DbContextOptions_MSSQL(string connectionString)
    {
        BuildOptions(connectionString);
    }

    private void BuildOptions(string connectionString)
    {
        var builder = new DbContextOptionsBuilder();
        builder.UseSqlServer(connectionString);
        Options = builder.Options;
    }
}
