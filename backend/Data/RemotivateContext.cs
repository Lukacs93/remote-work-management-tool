using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class RemotivateContext : DbContext
{
    public DbSet<Project> Projects { get; set; }
    
    public DbSet<TaskItem> Tasks { get; set; }
    
    public DbSet<Date> Dates { get; set; }
    
    public DbSet<User> Users { get; set; }
    
    public RemotivateContext(DbContextOptions<RemotivateContext> options) : base(options)
    {
    }
}