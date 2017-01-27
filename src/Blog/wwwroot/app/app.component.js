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
var BlogService_1 = require("./services/BlogService");
var SessionService_1 = require("./services/SessionService");
var dialogComponent_1 = require("./common/dialogComponent");
var AppComponent = (function () {
    function AppComponent(blogService, sessionService) {
        this.blogService = blogService;
        this.sessionService = sessionService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.SetCurrentSite();
    };
    AppComponent.prototype.SetCurrentSite = function () {
        var _this = this;
        this.dialogComponent.showWaitDialog();
        this.blogService.GetActiveSites().subscribe(function (data) {
            var site = data.find(function (x) { return x.SiteName === "Sams Blog"; });
            if (site === null || site === undefined)
                throw new Error("Site Sams Blog was not found");
            _this.sessionService.AnnounceSite(site);
            _this.sessionService.siteAnnouncedSource.complete();
            _this.dialogComponent.hideWaitDialog();
        });
    };
    AppComponent.prototype.SetNavBarMenuID = function () {
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(dialogComponent_1.DialogComponent),
    __metadata("design:type", dialogComponent_1.DialogComponent)
], AppComponent.prototype, "dialogComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.html',
        providers: [BlogService_1.BlogService, SessionService_1.SessionService]
    }),
    __metadata("design:paramtypes", [BlogService_1.BlogService, SessionService_1.SessionService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map