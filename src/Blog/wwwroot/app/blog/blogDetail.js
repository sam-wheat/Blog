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
var platform_browser_1 = require("@angular/platform-browser");
var BlogService_1 = require("./../services/BlogService");
var SessionService_1 = require("./../services/SessionService");
var model_1 = require("../model/model");
var dialogComponent_1 = require("../common/dialogComponent");
//declare var jQuery: any;
var BlogDetail = (function () {
    function BlogDetail(sessionService, blogService, route, sanitizer, el) {
        this.sessionService = sessionService;
        this.blogService = blogService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.el = el;
        this.PostRoot = this.sessionService.PostRoot;
        this.articleRoot = "/articles/";
        this.Post = new model_1.ContentItem();
        this.Post.ID = 0; // must initialize property or it will not be created on object
    }
    Object.defineProperty(BlogDetail.prototype, "ArticleURL", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustResourceUrl(this.articleRoot + this.Post.URL);
        },
        enumerable: true,
        configurable: true
    });
    BlogDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.dialogComponent.showWaitDialog();
        this.sub = this.route.params.subscribe(function (params) {
            var slug = params['slug'];
            _this.getContentItem(slug);
        });
    };
    BlogDetail.prototype.ngAfterViewInit = function () {
    };
    BlogDetail.prototype.ngOnDestroy = function () {
        if (this.sub != null)
            this.sub.unsubscribe();
        this.siteSubscription.unsubscribe();
    };
    BlogDetail.prototype.getContentItem = function (slug) {
        var _this = this;
        if (slug === null || typeof slug === 'undefined')
            return;
        this.siteSubscription = this.sessionService.siteAnnouncedSource.subscribe(function (site) {
            _this.blogService.GetContentItemBySlug(slug, site.ID).subscribe(function (x) {
                _this.Post = x;
                _this.blogService.GetPostHtml(_this.sessionService.PostRoot + _this.Post.URL).subscribe(function (h) {
                    // this is correct but does not work due to bug
                    //this.Content = this.sanitizer.bypassSecurityTrustHtml(h);
                    // workaround http://stackoverflow.com/questions/31548311/angular-2-html-binding
                    _this.contentContainer2.nativeElement.innerHTML = h;
                    //jQuery("#contentContainer").html(h).promise().done(function () { highlight(hljs); });
                    // end workaround
                    highlight(hljs); // exists in js/site.js
                    _this.dialogComponent.hideWaitDialog();
                });
            });
        });
    };
    return BlogDetail;
}());
__decorate([
    core_1.ViewChild('contentContainer'),
    __metadata("design:type", core_1.ElementRef)
], BlogDetail.prototype, "contentContainer2", void 0);
__decorate([
    core_1.ViewChild(dialogComponent_1.DialogComponent),
    __metadata("design:type", dialogComponent_1.DialogComponent)
], BlogDetail.prototype, "dialogComponent", void 0);
BlogDetail = __decorate([
    core_1.Component({
        selector: 'blog-blog-detail',
        templateUrl: './app/blog/blogDetail.html'
    }),
    __metadata("design:paramtypes", [SessionService_1.SessionService, BlogService_1.BlogService, router_1.ActivatedRoute, platform_browser_1.DomSanitizer, core_1.ElementRef])
], BlogDetail);
exports.BlogDetail = BlogDetail;
//# sourceMappingURL=blogDetail.js.map