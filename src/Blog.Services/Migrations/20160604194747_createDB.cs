using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Blog.Services.Migrations
{
    public partial class createDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sites",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    SiteName = table.Column<string>(nullable: false),
                    URL = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sites", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ContentGroups",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Active = table.Column<bool>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Sequence = table.Column<int>(nullable: false),
                    SiteID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContentGroups", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ContentGroups_Sites_SiteID",
                        column: x => x.SiteID,
                        principalTable: "Sites",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Menus",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MenuName = table.Column<string>(nullable: true),
                    SiteID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Menus", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Menus_Sites_SiteID",
                        column: x => x.SiteID,
                        principalTable: "Sites",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ContentItems",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Abstract = table.Column<string>(nullable: true),
                    Active = table.Column<bool>(nullable: false),
                    AllowComments = table.Column<bool>(nullable: false),
                    ChangeFrequency = table.Column<string>(nullable: true),
                    ContentGroupID = table.Column<int>(nullable: true),
                    ContentType = table.Column<string>(nullable: true),
                    Icon = table.Column<string>(nullable: true),
                    LastModifyDate = table.Column<DateTime>(nullable: true),
                    MenuText = table.Column<string>(nullable: true),
                    Priority = table.Column<decimal>(nullable: false),
                    PublishDate = table.Column<DateTime>(nullable: true),
                    Slug = table.Column<string>(nullable: true),
                    Tags = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    URL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContentItems", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ContentItems_ContentGroups_ContentGroupID",
                        column: x => x.ContentGroupID,
                        principalTable: "ContentGroups",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    ID = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Approved = table.Column<bool>(nullable: false),
                    CommentText = table.Column<string>(nullable: false),
                    ContentItemID = table.Column<int>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    ParentID = table.Column<long>(nullable: true),
                    SenderEMail = table.Column<string>(nullable: true),
                    SenderIPAddress = table.Column<string>(nullable: true),
                    SenderName = table.Column<string>(nullable: true),
                    SenderWebsite = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Comments_ContentItems_ContentItemID",
                        column: x => x.ContentItemID,
                        principalTable: "ContentItems",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Comments_Comments_ParentID",
                        column: x => x.ParentID,
                        principalTable: "Comments",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MenuContentItems",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ContentItemID = table.Column<int>(nullable: false),
                    MenuID = table.Column<int>(nullable: false),
                    Sequence = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuContentItems", x => x.ID);
                    table.ForeignKey(
                        name: "FK_MenuContentItems_ContentItems_ContentItemID",
                        column: x => x.ContentItemID,
                        principalTable: "ContentItems",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MenuContentItems_Menus_MenuID",
                        column: x => x.MenuID,
                        principalTable: "Menus",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comments_ContentItemID",
                table: "Comments",
                column: "ContentItemID");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_ParentID",
                table: "Comments",
                column: "ParentID");

            migrationBuilder.CreateIndex(
                name: "IX_ContentGroups_SiteID",
                table: "ContentGroups",
                column: "SiteID");

            migrationBuilder.CreateIndex(
                name: "IX_ContentItems_ContentGroupID",
                table: "ContentItems",
                column: "ContentGroupID");

            migrationBuilder.CreateIndex(
                name: "IX_Menus_SiteID",
                table: "Menus",
                column: "SiteID");

            migrationBuilder.CreateIndex(
                name: "IX_MenuContentItems_ContentItemID",
                table: "MenuContentItems",
                column: "ContentItemID");

            migrationBuilder.CreateIndex(
                name: "IX_MenuContentItems_MenuID",
                table: "MenuContentItems",
                column: "MenuID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "MenuContentItems");

            migrationBuilder.DropTable(
                name: "ContentItems");

            migrationBuilder.DropTable(
                name: "Menus");

            migrationBuilder.DropTable(
                name: "ContentGroups");

            migrationBuilder.DropTable(
                name: "Sites");
        }
    }
}
