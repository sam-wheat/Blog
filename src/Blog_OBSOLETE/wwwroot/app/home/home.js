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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SessionService_1 = require("../services/SessionService");
var BlogService_1 = require("./../services/BlogService");
var Home = (function () {
    function Home(sessionService, blogService) {
        this.sessionService = sessionService;
        this.blogService = blogService;
        this.pageTitle = 'Welcome';
    }
    Home.prototype.ngOnInit = function () {
        runAnimation(jQuery);
    };
    Home.prototype.ngOnDestroy = function () {
    };
    Home.prototype.onChangeGroup = function () {
    };
    return Home;
}());
Home = __decorate([
    core_1.Component({
        templateUrl: 'app/home/home.html'
    }),
    __metadata("design:paramtypes", [SessionService_1.SessionService, BlogService_1.BlogService])
], Home);
exports.Home = Home;
//# sourceMappingURL=home.js.map