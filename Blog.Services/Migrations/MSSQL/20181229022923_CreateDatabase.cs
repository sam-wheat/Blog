﻿using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Services.Migrations.MSSQL
{
    public partial class CreateDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Blog");

            migrationBuilder.CreateTable(
                name: "Sites",
                schema: "Blog",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SiteName = table.Column<string>(nullable: false),
                    URL = table.Column<string>(nullable: false),
                    Active = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sites", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ContentGroups",
                schema: "Blog",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SiteID = table.Column<int>(nullable: false),
                    Description = table.Column<string>(maxLength: 150, nullable: false),
                    Sequence = table.Column<int>(nullable: false),
                    Active = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContentGroups", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ContentGroups_Sites_SiteID",
                        column: x => x.SiteID,
                        principalSchema: "Blog",
                        principalTable: "Sites",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Menus",
                schema: "Blog",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    SiteID = table.Column<int>(nullable: false),
                    MenuName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Menus", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Menus_Sites_SiteID",
                        column: x => x.SiteID,
                        principalSchema: "Blog",
                        principalTable: "Sites",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ContentItems",
                schema: "Blog",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ContentType = table.Column<int>(maxLength: 100, nullable: false),
                    ContentGroupID = table.Column<int>(nullable: true),
                    PublishDate = table.Column<DateTime>(nullable: true),
                    LastModifyDate = table.Column<DateTime>(nullable: true),
                    ChangeFrequency = table.Column<string>(maxLength: 100, nullable: true),
                    Priority = table.Column<decimal>(nullable: false),
                    Active = table.Column<bool>(nullable: false),
                    Slug = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    MenuText = table.Column<string>(nullable: true),
                    URL = table.Column<string>(nullable: true),
                    Abstract = table.Column<string>(nullable: true),
                    Icon = table.Column<string>(maxLength: 200, nullable: true),
                    Tags = table.Column<string>(nullable: true),
                    AllowComments = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContentItems", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ContentItems_ContentGroups_ContentGroupID",
                        column: x => x.ContentGroupID,
                        principalSchema: "Blog",
                        principalTable: "ContentGroups",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                schema: "Blog",
                columns: table => new
                {
                    ID = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ParentID = table.Column<long>(nullable: true),
                    ContentItemID = table.Column<int>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    SenderName = table.Column<string>(maxLength: 100, nullable: true),
                    SenderEMail = table.Column<string>(maxLength: 100, nullable: true),
                    SenderWebsite = table.Column<string>(maxLength: 100, nullable: true),
                    SenderIPAddress = table.Column<string>(maxLength: 50, nullable: true),
                    CommentText = table.Column<string>(nullable: false),
                    Approved = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Comments_ContentItems_ContentItemID",
                        column: x => x.ContentItemID,
                        principalSchema: "Blog",
                        principalTable: "ContentItems",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Comments_Comments_ParentID",
                        column: x => x.ParentID,
                        principalSchema: "Blog",
                        principalTable: "Comments",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MenuContentItems",
                schema: "Blog",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MenuID = table.Column<int>(nullable: false),
                    ContentItemID = table.Column<int>(nullable: false),
                    Sequence = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuContentItems", x => x.ID);
                    table.ForeignKey(
                        name: "FK_MenuContentItems_ContentItems_ContentItemID",
                        column: x => x.ContentItemID,
                        principalSchema: "Blog",
                        principalTable: "ContentItems",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MenuContentItems_Menus_MenuID",
                        column: x => x.MenuID,
                        principalSchema: "Blog",
                        principalTable: "Menus",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comments_ContentItemID",
                schema: "Blog",
                table: "Comments",
                column: "ContentItemID");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_ParentID",
                schema: "Blog",
                table: "Comments",
                column: "ParentID");

            migrationBuilder.CreateIndex(
                name: "IX_ContentGroups_SiteID",
                schema: "Blog",
                table: "ContentGroups",
                column: "SiteID");

            migrationBuilder.CreateIndex(
                name: "IX_ContentItems_ContentGroupID",
                schema: "Blog",
                table: "ContentItems",
                column: "ContentGroupID");

            migrationBuilder.CreateIndex(
                name: "IX_MenuContentItems_ContentItemID",
                schema: "Blog",
                table: "MenuContentItems",
                column: "ContentItemID");

            migrationBuilder.CreateIndex(
                name: "IX_MenuContentItems_MenuID",
                schema: "Blog",
                table: "MenuContentItems",
                column: "MenuID");

            migrationBuilder.CreateIndex(
                name: "IX_Menus_SiteID",
                schema: "Blog",
                table: "Menus",
                column: "SiteID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comments",
                schema: "Blog");

            migrationBuilder.DropTable(
                name: "MenuContentItems",
                schema: "Blog");

            migrationBuilder.DropTable(
                name: "ContentItems",
                schema: "Blog");

            migrationBuilder.DropTable(
                name: "Menus",
                schema: "Blog");

            migrationBuilder.DropTable(
                name: "ContentGroups",
                schema: "Blog");

            migrationBuilder.DropTable(
                name: "Sites",
                schema: "Blog");
        }
    }
}
