﻿// <auto-generated />
using System;
using Blog.Services.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Blog.Services.Migrations.MSSQL
{
    [DbContext(typeof(DbMSSQL))]
    [Migration("20211208151923_CreateDatabase")]
    partial class CreateDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Blog.Model.Comment", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("ID"), 1L, 1);

                    b.Property<bool>("Approved")
                        .HasColumnType("bit");

                    b.Property<string>("CommentText")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ContentItemID")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<long?>("ParentID")
                        .HasColumnType("bigint");

                    b.Property<string>("SenderEMail")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("SenderIPAddress")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("SenderName")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("SenderWebsite")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("ID");

                    b.HasIndex("ContentItemID");

                    b.HasIndex("ParentID");

                    b.ToTable("Comments", "Blog");
                });

            modelBuilder.Entity("Blog.Model.ContentGroup", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<int>("Sequence")
                        .HasColumnType("int");

                    b.Property<int>("SiteID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("SiteID");

                    b.ToTable("ContentGroups", "Blog");
                });

            modelBuilder.Entity("Blog.Model.ContentItem", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Abstract")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<bool>("AllowComments")
                        .HasColumnType("bit");

                    b.Property<string>("ChangeFrequency")
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("ContentGroupID")
                        .HasColumnType("int");

                    b.Property<int>("ContentType")
                        .HasMaxLength(100)
                        .HasColumnType("int");

                    b.Property<string>("Icon")
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<DateTime?>("LastModifyDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("MenuText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Priority")
                        .HasColumnType("decimal(10,2)");

                    b.Property<DateTime?>("PublishDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Slug")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tags")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("URL")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("ContentGroupID");

                    b.ToTable("ContentItems", "Blog");
                });

            modelBuilder.Entity("Blog.Model.Menu", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("MenuName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SiteID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("SiteID");

                    b.ToTable("Menus", "Blog");
                });

            modelBuilder.Entity("Blog.Model.MenuContentItem", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<int>("ContentItemID")
                        .HasColumnType("int");

                    b.Property<int>("MenuID")
                        .HasColumnType("int");

                    b.Property<int>("Sequence")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("ContentItemID");

                    b.HasIndex("MenuID");

                    b.ToTable("MenuContentItems", "Blog");
                });

            modelBuilder.Entity("Blog.Model.Site", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("SiteName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("URL")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Sites", "Blog");
                });

            modelBuilder.Entity("Blog.Model.Comment", b =>
                {
                    b.HasOne("Blog.Model.ContentItem", "ContentItem")
                        .WithMany("Comments")
                        .HasForeignKey("ContentItemID");

                    b.HasOne("Blog.Model.Comment", "ParentComment")
                        .WithMany("ChildComments")
                        .HasForeignKey("ParentID");

                    b.Navigation("ContentItem");

                    b.Navigation("ParentComment");
                });

            modelBuilder.Entity("Blog.Model.ContentGroup", b =>
                {
                    b.HasOne("Blog.Model.Site", "Site")
                        .WithMany("ContentGroups")
                        .HasForeignKey("SiteID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Site");
                });

            modelBuilder.Entity("Blog.Model.ContentItem", b =>
                {
                    b.HasOne("Blog.Model.ContentGroup", "ContentGroup")
                        .WithMany("ContentItems")
                        .HasForeignKey("ContentGroupID");

                    b.Navigation("ContentGroup");
                });

            modelBuilder.Entity("Blog.Model.Menu", b =>
                {
                    b.HasOne("Blog.Model.Site", "Site")
                        .WithMany("Menus")
                        .HasForeignKey("SiteID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Site");
                });

            modelBuilder.Entity("Blog.Model.MenuContentItem", b =>
                {
                    b.HasOne("Blog.Model.ContentItem", "ContentItem")
                        .WithMany("MenuContentItems")
                        .HasForeignKey("ContentItemID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Blog.Model.Menu", "Menu")
                        .WithMany("MenuContentItems")
                        .HasForeignKey("MenuID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("ContentItem");

                    b.Navigation("Menu");
                });

            modelBuilder.Entity("Blog.Model.Comment", b =>
                {
                    b.Navigation("ChildComments");
                });

            modelBuilder.Entity("Blog.Model.ContentGroup", b =>
                {
                    b.Navigation("ContentItems");
                });

            modelBuilder.Entity("Blog.Model.ContentItem", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("MenuContentItems");
                });

            modelBuilder.Entity("Blog.Model.Menu", b =>
                {
                    b.Navigation("MenuContentItems");
                });

            modelBuilder.Entity("Blog.Model.Site", b =>
                {
                    b.Navigation("ContentGroups");

                    b.Navigation("Menus");
                });
#pragma warning restore 612, 618
        }
    }
}
