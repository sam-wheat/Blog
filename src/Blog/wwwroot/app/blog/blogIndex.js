"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BlogService_1 = require("./../services/BlogService");
var SessionService_1 = require("./../services/SessionService");
var dialogComponent_1 = require("../common/dialogComponent");
var BlogIndex = (function () {
    function BlogIndex(router, blogService, sessionService) {
        this.router = router;
        this.blogService = blogService;
        this.sessionService = sessionService;
        this.ImageRoot = sessionService.ImageRoot;
        this.PostRoot = sessionService.PostRoot;
        this.ContentItems = [];
    }
    BlogIndex.prototype.ngOnInit = function () {
        var _this = this;
        this.siteSubscription = this.sessionService.siteAnnounced$.subscribe(function (x) {
            _this.updateIndex();
        });
        this.groupIDFilterSubscription = this.sessionService.groupAnnounced$.subscribe(function (x) {
            _this.updateIndex();
        });
        this.dateFilterSubscription = this.sessionService.dateFilterAnnouncedSource$.subscribe(function (x) {
            _this.updateIndex();
        });
        this.updateIndex();
    };
    BlogIndex.prototype.ngOnDestroy = function () {
        this.siteSubscription.unsubscribe();
        this.groupIDFilterSubscription.unsubscribe();
        this.dateFilterSubscription.unsubscribe();
    };
    BlogIndex.prototype.updateIndex = function () {
        // Make sure all parameters and filters have been initialized so we dont query multiple times
        var _this = this;
        if (this.sessionService.IsInitialized() === false)
            return;
        this.dialogComponent.showWaitDialog();
        var currentSiteID = this.sessionService.CurrentSite.ID;
        var blogIndex = this.sessionService.CurrentSite.Menus.find(function (x) { return x.MenuName === "BlogIndex"; });
        var currentMenuID = blogIndex.ID;
        var currentGroupID = this.sessionService.CurrentGroupID;
        this.blogService.GetContentItems(currentSiteID, currentMenuID, currentGroupID, this.sessionService.CurrentDateFilter)
            .subscribe(function (x) {
            _this.dialogComponent.hideWaitDialog();
            _this.ContentItems = x;
        });
    };
    BlogIndex.prototype.onClick = function (item) {
        this.router.navigate(['/Post', item.Slug]);
    };
    return BlogIndex;
}());
__decorate([
    core_1.ViewChild(dialogComponent_1.DialogComponent),
    __metadata("design:type", dialogComponent_1.DialogComponent)
], BlogIndex.prototype, "dialogComponent", void 0);
BlogIndex = __decorate([
    core_1.Component({
        selector: 'blog-blog-index',
        templateUrl: './app/blog/blogIndex.html',
        styles: [':host { display:flex;flex-flow:column;height:100%; }']
    }),
    __metadata("design:paramtypes", [router_1.Router, BlogService_1.BlogService, SessionService_1.SessionService])
], BlogIndex);
exports.BlogIndex = BlogIndex;
//# sourceMappingURL=blogIndex.js.map