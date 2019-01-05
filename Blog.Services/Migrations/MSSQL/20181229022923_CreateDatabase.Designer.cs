﻿// <auto-generated />
using System;
using Blog.Services.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Blog.Services.Migrations.MSSQL
{
    [DbContext(typeof(DbMSSQL))]
    [Migration("20181229022923_CreateDatabase")]
    partial class CreateDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Blog.Model.Comment", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Approved");

                    b.Property<string>("CommentText")
                        .IsRequired();

                    b.Property<int?>("ContentItemID");

                    b.Property<DateTime>("Date");

                    b.Property<long?>("ParentID");

                    b.Property<string>("SenderEMail")
                        .HasMaxLength(100);

                    b.Property<string>("SenderIPAddress")
                        .HasMaxLength(50);

                    b.Property<string>("SenderName")
                        .HasMaxLength(100);

                    b.Property<string>("SenderWebsite")
                        .HasMaxLength(100);

                    b.HasKey("ID");

                    b.HasIndex("ContentItemID");

                    b.HasIndex("ParentID");

                    b.ToTable("Comments","Blog");
                });

            modelBuilder.Entity("Blog.Model.ContentGroup", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(150);

                    b.Property<int>("Sequence");

                    b.Property<int>("SiteID");

                    b.HasKey("ID");

                    b.HasIndex("SiteID");

                    b.ToTable("ContentGroups","Blog");
                });

            modelBuilder.Entity("Blog.Model.ContentItem", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Abstract");

                    b.Property<bool>("Active");

                    b.Property<bool>("AllowComments");

                    b.Property<string>("ChangeFrequency")
                        .HasMaxLength(100);

                    b.Property<int?>("ContentGroupID");

                    b.Property<int>("ContentType")
                        .HasMaxLength(100);

                    b.Property<string>("Icon")
                        .HasMaxLength(200);

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

                    b.ToTable("ContentItems","Blog");
                });

            modelBuilder.Entity("Blog.Model.Menu", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("MenuName");

                    b.Property<int>("SiteID");

                    b.HasKey("ID");

                    b.HasIndex("SiteID");

                    b.ToTable("Menus","Blog");
                });

            modelBuilder.Entity("Blog.Model.MenuContentItem", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ContentItemID");

                    b.Property<int>("MenuID");

                    b.Property<int>("Sequence");

                    b.HasKey("ID");

                    b.HasIndex("ContentItemID");

                    b.HasIndex("MenuID");

                    b.ToTable("MenuContentItems","Blog");
                });

            modelBuilder.Entity("Blog.Model.Site", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("SiteName")
                        .IsRequired();

                    b.Property<string>("URL")
                        .IsRequired();

                    b.HasKey("ID");

                    b.ToTable("Sites","Blog");
                });

            modelBuilder.Entity("Blog.Model.Comment", b =>
                {
                    b.HasOne("Blog.Model.ContentItem", "ContentItem")
                        .WithMany("Comments")
                        .HasForeignKey("ContentItemID");

                    b.HasOne("Blog.Model.Comment", "ParentComment")
                        .WithMany("ChildComments")
                        .HasForeignKey("ParentID");
                });

            modelBuilder.Entity("Blog.Model.ContentGroup", b =>
                {
                    b.HasOne("Blog.Model.Site", "Site")
                        .WithMany("ContentGroups")
                        .HasForeignKey("SiteID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Blog.Model.ContentItem", b =>
                {
                    b.HasOne("Blog.Model.ContentGroup", "ContentGroup")
                        .WithMany("ContentItems")
                        .HasForeignKey("ContentGroupID");
                });

            modelBuilder.Entity("Blog.Model.Menu", b =>
                {
                    b.HasOne("Blog.Model.Site", "Site")
                        .WithMany("Menus")
                        .HasForeignKey("SiteID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Blog.Model.MenuContentItem", b =>
                {
                    b.HasOne("Blog.Model.ContentItem", "ContentItem")
                        .WithMany("MenuContentItems")
                        .HasForeignKey("ContentItemID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Blog.Model.Menu", "Menu")
                        .WithMany("MenuContentItems")
                        .HasForeignKey("MenuID")
                        .OnDelete(DeleteBehavior.Restrict);
                });
#pragma warning restore 612, 618
        }
    }
}