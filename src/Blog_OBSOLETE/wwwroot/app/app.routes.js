"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_1 = require("./about/about");
var contact_1 = require("./contact/contact");
var blogIndex_1 = require("./blog/blogIndex");
var blogDetail_1 = require("./blog/blogDetail");
var home_1 = require("./home/home");
// When adding a route, also add rewrite rule in web.config
var routes = [
    { path: '', component: home_1.Home },
    { path: 'About', component: about_1.About },
    { path: 'Contact', component: contact_1.Contact },
    { path: 'BlogIndex', component: blogIndex_1.BlogIndex },
    { path: 'Post/:slug', component: blogDetail_1.BlogDetail }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map