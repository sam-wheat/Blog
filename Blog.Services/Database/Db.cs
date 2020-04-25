using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using LeaderAnalytics.AdaptiveClient;
using LeaderAnalytics.AdaptiveClient.EntityFrameworkCore;
using Blog.Model;

namespace Blog.Services.Database
{
    public class Db : DbContext
    {
        public DbSet<Comment> Comments { get; set; }
        public DbSet<ContentGroup> ContentGroups { get; set; }
        public DbSet<ContentItem> ContentItems { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<MenuContentItem> MenuContentItems { get; set; }
        public DbSet<Site> Sites { get; set; }

        public Db(ResolutionHelper resolver) : base(resolver.ResolveDbContextOptions().Options) 
        {

        }

        public Db(DbContextOptions options) : base(options)
        {
        }

        private void Initialize()
        {
            
            ChangeTracker.AutoDetectChangesEnabled = false;
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
            Database.SetCommandTimeout(360);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.EnableSensitiveDataLogging();
        }
        
        protected override void OnModelCreating(ModelBuilder mb)
        {
            base.OnModelCreating(mb);

            // Comment
            mb.Entity<Comment>().ToTable("Comments", "Blog");
            mb.Entity<Comment>().HasMany(x => x.ChildComments).WithOne(x => x.ParentComment).HasForeignKey(x => x.ParentID);
            mb.Entity<Comment>().Property(x => x.CommentText).IsRequired();
            mb.Entity<Comment>().Property(x => x.SenderEMail).HasMaxLength(100);
            mb.Entity<Comment>().Property(x => x.SenderIPAddress).HasMaxLength(50);
            mb.Entity<Comment>().Property(x => x.SenderName).HasMaxLength(100);
            mb.Entity<Comment>().Property(x => x.SenderWebsite).HasMaxLength(100);

            // ContentGroup
            mb.Entity<ContentGroup>().ToTable("ContentGroups", "Blog");
            mb.Entity<ContentGroup>().HasMany(x => x.ContentItems).WithOne(x => x.ContentGroup).HasForeignKey(x => x.ContentGroupID);
            mb.Entity<ContentGroup>().Property(x => x.Description).IsRequired();
            mb.Entity<ContentGroup>().Property(x => x.Description).HasMaxLength(150);

            mb.Entity<ContentItem>().ToTable("ContentItems", "Blog");
            mb.Entity<ContentItem>().HasMany(x => x.MenuContentItems).WithOne(x => x.ContentItem);
            mb.Entity<ContentItem>().Property(x => x.ChangeFrequency).HasMaxLength(100);
            mb.Entity<ContentItem>().Property(x => x.ContentType).HasMaxLength(100);
            mb.Entity<ContentItem>().Property(x => x.Icon).HasMaxLength(200);

            mb.Entity<Menu>().ToTable("Menus", "Blog");
            mb.Entity<Menu>().HasMany(x => x.MenuContentItems).WithOne(x => x.Menu).OnDelete(DeleteBehavior.Restrict); ;

            mb.Entity<MenuContentItem>().ToTable("MenuContentItems", "Blog");

            // Site
            mb.Entity<Site>().ToTable("Sites", "Blog");
            mb.Entity<Site>().HasMany(x => x.Menus).WithOne(x => x.Site).HasForeignKey(x => x.SiteID);
            mb.Entity<Site>().Property(x => x.SiteName).IsRequired();
            mb.Entity<Site>().Property(x => x.URL).IsRequired();
        }
    }
}
