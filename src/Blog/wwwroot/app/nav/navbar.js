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
var SessionService_1 = require("../services/SessionService");
var model_1 = require("../model/model");
var router_1 = require("@angular/router");
var NavBar = (function () {
    function NavBar(sessionService, _router) {
        this.sessionService = sessionService;
        this.router = _router;
    }
    NavBar.prototype.ngOnInit = function () {
        var _this = this;
        this.mainMenu = new model_1.Menu();
        this.mainMenu.MenuContentItems = [];
        this.subscription = this.sessionService.siteAnnouncedSource.subscribe(function (s) {
            if (s === null)
                return;
            var navBar = s.Menus.find(function (x) { return x.MenuName === "NavBar"; });
            if (navBar !== null && navBar !== undefined) {
                _this.mainMenu = navBar;
                _this.sessionService.AnnounceMenuID(navBar.ID);
            }
        });
    };
    NavBar.prototype.onClick = function (menuItem) {
        this.selectedMenuItem = menuItem;
    };
    NavBar.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavBar.prototype.isActive = function (menuItem) {
        var result = false;
        if (menuItem === null)
            return result;
        if (menuItem.startsWith("/BlogIndex") && this.router.url.startsWith("/Post"))
            result = true;
        else
            result = menuItem === this.router.url;
        return result;
    };
    return NavBar;
}());
NavBar = __decorate([
    core_1.Component({
        selector: 'blog-navbar',
        templateUrl: './app/nav/navbar.html'
    }),
    __metadata("design:paramtypes", [SessionService_1.SessionService, router_1.Router])
], NavBar);
exports.NavBar = NavBar;
//# sourceMappingURL=navbar.js.map