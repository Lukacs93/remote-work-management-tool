using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class RemotivateContext : DbContext
{
    public RemotivateContext(DbContextOptions<RemotivateContext> options) : base(options)
    {
    }
}