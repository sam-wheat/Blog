using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Blog.Services;

namespace Blog.Services.Migrations
{
    [DbContext(typeof(Db))]
    [Migration("20160604194747_createDB")]
    partial class createDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20901")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Blog.Model.Comment", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Approved");

                    b.Property<string>("CommentText")
                        .IsRequired();

                    b.Property<int?>("ContentItemID");

                    b.Property<DateTime>("Date");

                    b.Property<long?>("ParentID");

                    b.Property<string>("SenderEMail")
                        .HasAnnotation("MaxLength", 100);

                    b.Property<string>("SenderIPAddress")
                        .HasAnnotation("MaxLength", 50);

                    b.Property<string>("SenderName")
                        .HasAnnotation("MaxLength", 100);

                    b.Property<string>("SenderWebsite")
                        .HasAnnotation("MaxLength", 100);

                    b.HasKey("ID");

                    b.HasIndex("ContentItemID");

                    b.HasIndex("ParentID");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Blog.Model.ContentGroup", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 150);

                    b.Property<int>("Sequence");

                    b.Property<int>("SiteID");

                    b.HasKey("ID");

                    b.HasIndex("SiteID");

                    b.ToTable("ContentGroups");
                });

            modelBuilder.Entity("Blog.Model.ContentItem", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Abstract");

                    b.Property<bool>("Active");

                    b.Property<bool>("AllowComments");

                    b.Property<string>("ChangeFrequency")
                        .HasAnnotation("MaxLength", 100);

                    b.Property<int?>("ContentGroupID");

                    b.Property<string>("ContentType")
                        .HasAnnotation("MaxLength", 100);

                    b.Property<string>("Icon")
                        .HasAnnotation("MaxLength", 200);

                    b.Property<DateTime?>("LastModifyDate");

                    b.Property<string>("MenuText");

                    b.Property<decimal>("Priority");

                    b.Property<DateTime?>("PublishDate");

                    b.Property<string>("Slug");

                    b.Property<string>("Tags");

                    b.Property<string>("Title");

                    b.Property<string>("URL");

                    b.HasKey("ID");

                    b.HasIndex("ContentGroupID");

                    b.ToTable("ContentItems");
                });

            modelBuilder.Entity("Blog.Model.Menu", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("MenuName");

                    b.Property<int>("SiteID");

                    b.HasKey("ID");

                    b.HasIndex("SiteID");

                    b.ToTable("Menus");
                });

            modelBuilder.Entity("Blog.Model.MenuContentItem", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ContentItemID");

                    b.Property<int>("MenuID");

                    b.Property<int>("Sequence");

                    b.HasKey("ID");

                    b.HasIndex("ContentItemID");

                    b.HasIndex("MenuID");

                    b.ToTable("MenuContentItems");
                });

            modelBuilder.Entity("Blog.Model.Site", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("SiteName")
                        .IsRequired();

                    b.Property<string>("URL")
                        .IsRequired();

                    b.HasKey("ID");

                    b.ToTable("Sites");
                });

            modelBuilder.Entity("Blog.Model.Comment", b =>
                {
                    b.HasOne("Blog.Model.ContentItem")
                        .WithMany()
                        .HasForeignKey("ContentItemID");

                    b.HasOne("Blog.Model.Comment")
                        .WithMany()
                        .HasForeignKey("ParentID");
                });

            modelBuilder.Entity("Blog.Model.ContentGroup", b =>
                {
                    b.HasOne("Blog.Model.Site")
                        .WithMany()
                        .HasForeignKey("SiteID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Blog.Model.ContentItem", b =>
                {
                    b.HasOne("Blog.Model.ContentGroup")
                        .WithMany()
                        .HasForeignKey("ContentGroupID");
                });

            modelBuilder.Entity("Blog.Model.Menu", b =>
                {
                    b.HasOne("Blog.Model.Site")
                        .WithMany()
                        .HasForeignKey("SiteID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Blog.Model.MenuContentItem", b =>
                {
                    b.HasOne("Blog.Model.ContentItem")
                        .WithMany()
                        .HasForeignKey("ContentItemID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Blog.Model.Menu")
                        .WithMany()
                        .HasForeignKey("MenuID");
                });
        }
    }
}
