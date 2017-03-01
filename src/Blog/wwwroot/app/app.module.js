"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var app_component_1 = require("./app.component");
var SessionService_1 = require("./services/SessionService");
var BlogService_1 = require("./services/BlogService");
var app_routes_1 = require("./app.routes");
var blogDetail_1 = require("./blog/blogDetail");
var about_1 = require("./about/about");
var contact_1 = require("./contact/contact");
var blogIndex_1 = require("./blog/blogIndex");
var commentList_1 = require("./comments/commentList");
var home_1 = require("./home/home");
var groupFilter_1 = require("./blog/groupFilter");
var dialogComponent_1 = require("./common/dialogComponent");
var navbar_1 = require("./nav/navbar");
var app_config_1 = require("./app.config");
require('../js/site.js');
// workaround https://github.com/angular/angular/issues/11219
var core_2 = require("@angular/core");
var TimeDirective = (function () {
    function TimeDirective() {
    }
    return TimeDirective;
}());
TimeDirective = __decorate([
    core_2.Directive({ selector: 'time' })
], TimeDirective);
exports.TimeDirective = TimeDirective;
// end workaround
var routes = [];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routes_1.routing,
            router_1.RouterModule.forRoot(routes, { useHash: false })
        ],
        declarations: [
            blogDetail_1.BlogDetail,
            app_component_1.AppComponent,
            about_1.About,
            contact_1.Contact,
            blogIndex_1.BlogIndex,
            home_1.Home,
            groupFilter_1.GroupFilter,
            dialogComponent_1.DialogComponent,
            navbar_1.NavBar,
            commentList_1.CommentList,
            TimeDirective //workaround
        ],
        providers: [
            app_routes_1.appRoutingProviders,
            SessionService_1.SessionService,
            BlogService_1.BlogService,
            app_config_1.AppConfig
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map