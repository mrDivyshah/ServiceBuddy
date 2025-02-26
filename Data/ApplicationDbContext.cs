using Microsoft.EntityFrameworkCore;
using ServiceBuddy.Models;

namespace ServiceBuddy.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<UserData> User { get; set; }
        public DbSet<serviceTable> serviceTables { get; set; }
    }
}
