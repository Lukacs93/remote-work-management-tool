using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public class RemotivateContext : DbContext
{
    public RemotivateContext(DbContextOptions<RemotivateContext> options) : base(options)
    {
    }
}