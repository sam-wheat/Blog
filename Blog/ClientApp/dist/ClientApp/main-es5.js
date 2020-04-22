function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _blog_index_blog_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog-index/blog-index.component */
    "./src/app/blog-index/blog-index.component.ts");
    /* harmony import */


    var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./side-nav/side-nav.component */
    "./src/app/side-nav/side-nav.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'blogIndex',
      component: _blog_index_blog_index_component__WEBPACK_IMPORTED_MODULE_3__["BlogIndexComponent"]
    }, {
      path: 'sideNav',
      component: _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        anchorScrolling: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            anchorScrolling: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_sessionService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/sessionService */
    "./src/app/services/sessionService.ts");
    /* harmony import */


    var _services_blogService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/blogService */
    "./src/app/services/blogService.ts");
    /* harmony import */


    var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./side-nav/side-nav.component */
    "./src/app/side-nav/side-nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(sessionService, blogService) {
        _classCallCheck(this, AppComponent);

        this.sessionService = sessionService;
        this.blogService = blogService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.blogService.GetActiveSites().subscribe(function (data) {
            var site = data.find(function (x) {
              return x.SiteName === "Sams Blog";
            });
            if (site === null || site === undefined) throw new Error("Site Sams Blog was not found");

            _this.sessionService.AnnounceSite(site);

            _this.sessionService.siteAnnouncedSource.complete();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sessionService__WEBPACK_IMPORTED_MODULE_1__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blogService__WEBPACK_IMPORTED_MODULE_2__["BlogService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["SideNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_sessionService__WEBPACK_IMPORTED_MODULE_1__["SessionService"]
        }, {
          type: _services_blogService__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _blog_index_blog_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog-index/blog-index.component */
    "./src/app/blog-index/blog-index.component.ts");
    /* harmony import */


    var _services_HttpErrorHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/HttpErrorHandler */
    "./src/app/services/HttpErrorHandler.ts");
    /* harmony import */


    var _services_MessageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/MessageService */
    "./src/app/services/MessageService.ts");
    /* harmony import */


    var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./side-nav/side-nav.component */
    "./src/app/side-nav/side-nav.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _group_filter_group_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./group-filter/group-filter.component */
    "./src/app/group-filter/group-filter.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_HttpErrorHandler__WEBPACK_IMPORTED_MODULE_7__["HttpErrorHandler"], _services_MessageService__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], // import HttpClientModule after BrowserModule.
      _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _blog_index_blog_index_component__WEBPACK_IMPORTED_MODULE_6__["BlogIndexComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__["SideNavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _group_filter_group_filter_component__WEBPACK_IMPORTED_MODULE_12__["GroupFilterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], // import HttpClientModule after BrowserModule.
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _blog_index_blog_index_component__WEBPACK_IMPORTED_MODULE_6__["BlogIndexComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_9__["SideNavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _group_filter_group_filter_component__WEBPACK_IMPORTED_MODULE_12__["GroupFilterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], // import HttpClientModule after BrowserModule.
          _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]],
          providers: [_services_HttpErrorHandler__WEBPACK_IMPORTED_MODULE_7__["HttpErrorHandler"], _services_MessageService__WEBPACK_IMPORTED_MODULE_8__["MessageService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog-index/blog-index.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/blog-index/blog-index.component.ts ***!
    \****************************************************/

  /*! exports provided: BlogIndexComponent */

  /***/
  function srcAppBlogIndexBlogIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogIndexComponent", function () {
      return BlogIndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_blogService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/blogService */
    "./src/app/services/blogService.ts");
    /* harmony import */


    var _services_sessionService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/sessionService */
    "./src/app/services/sessionService.ts");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var BlogIndexComponent = /*#__PURE__*/function () {
      function BlogIndexComponent(router, blogService, sessionService) {
        _classCallCheck(this, BlogIndexComponent);

        this.router = router;
        this.blogService = blogService;
        this.sessionService = sessionService;
        this.ContentItems = [];
      }

      _createClass(BlogIndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.siteSubscription = this.sessionService.siteAnnounced$.subscribe(function (x) {
            _this2.updateIndex();
          });
          this.groupIDFilterSubscription = this.sessionService.groupAnnounced$.subscribe(function (x) {
            _this2.updateIndex();
          });
          this.dateFilterSubscription = this.sessionService.dateFilterAnnouncedSource$.subscribe(function (x) {
            _this2.updateIndex();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.siteSubscription.unsubscribe();
          this.groupIDFilterSubscription.unsubscribe();
          this.dateFilterSubscription.unsubscribe();
        }
      }, {
        key: "updateIndex",
        value: function updateIndex() {
          var _this3 = this;

          // Make sure all parameters and filters have been initialized so we don't query multiple times
          if (this.sessionService.IsInitialized() === false) return;
          var currentSiteID = this.sessionService.CurrentSite.ID;
          var blogIndex = this.sessionService.CurrentSite.Menus.find(function (x) {
            return x.MenuName === "BlogIndex";
          });
          var currentMenuID = blogIndex.ID;
          var currentGroupID = this.sessionService.CurrentGroupID;
          this.blogService.GetContentItems(currentSiteID, currentMenuID, currentGroupID, this.sessionService.CurrentDateFilter).subscribe(function (x) {
            _this3.ContentItems = x;
          });
        }
      }, {
        key: "onClick",
        value: function onClick(item) {
          this.router.navigate(['/Post', item.Slug]);
        }
      }]);

      return BlogIndexComponent;
    }();

    BlogIndexComponent.ɵfac = function BlogIndexComponent_Factory(t) {
      return new (t || BlogIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blogService__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sessionService__WEBPACK_IMPORTED_MODULE_3__["SessionService"]));
    };

    BlogIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogIndexComponent,
      selectors: [["app-blog-index"]],
      decls: 5,
      vars: 2,
      consts: [[2, "width", "500px", "height", "500px", "background-color", "green"], [3, "routerLink"]],
      template: function BlogIndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "this is blog index");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctaW5kZXgvYmxvZy1pbmRleC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-index',
          templateUrl: './blog-index.component.html',
          styleUrls: ['./blog-index.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_blogService__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
        }, {
          type: _services_sessionService__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/group-filter/group-filter.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/group-filter/group-filter.component.ts ***!
    \********************************************************/

  /*! exports provided: GroupFilterComponent */

  /***/
  function srcAppGroupFilterGroupFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupFilterComponent", function () {
      return GroupFilterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/model */
    "./src/app/model/model.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_blogService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/blogService */
    "./src/app/services/blogService.ts");
    /* harmony import */


    var _services_sessionService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/sessionService */
    "./src/app/services/sessionService.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GroupFilterComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0Topic");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GroupFilterComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0Publication Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GroupFilterComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupFilterComponent_li_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var grp_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onChangeGroup(grp_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var grp_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.isActive(grp_r3.Key));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grp_r3.Value);
      }
    }

    var GroupFilterComponent = /*#__PURE__*/function () {
      function GroupFilterComponent(blogService, sessionService) {
        _classCallCheck(this, GroupFilterComponent);

        this.blogService = blogService;
        this.sessionService = sessionService;
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCalendar"];
        this.faFlag = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFlag"];
      }

      _createClass(GroupFilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.siteSubscription = this.sessionService.siteAnnouncedSource.subscribe(function (x) {
            var blogIndex = x.Menus.find(function (x) {
              return x.MenuName === "BlogIndex";
            });
            _this4.menuID = blogIndex.ID;

            _this4.blogService.GetContentItemGroups(_this4.GroupColumn, _this4.menuID).subscribe(function (groups) {
              _this4.initializeGroupData(groups);
            });
          });
        }
      }, {
        key: "initializeGroupData",
        value: function initializeGroupData(groups) {
          if (groups === null || groups.length === 0) return;
          var kvp = new _model_model__WEBPACK_IMPORTED_MODULE_1__["KeyValuePair"]();

          if (this.sessionService.IsInitialized()) {
            if (this.GroupColumn === "GroupID") kvp.Key = this.sessionService.CurrentGroupID + 0 === this.sessionService.CurrentGroupID ? this.sessionService.CurrentGroupID + '' : null;else if (this.GroupColumn === "PubDate") kvp.Key = this.blogService.DateToString(this.sessionService.CurrentDateFilter);else throw "groupFilter.GroupColumn has an unexpected value: " + this.GroupColumn;
          } else kvp = groups[0];

          this.onChangeGroup(kvp);
          this.Items = groups;
        }
      }, {
        key: "onChangeGroup",
        value: function onChangeGroup(item) {
          this.SelectedItem = item;

          if (this.GroupColumn === "GroupID") {
            this.sessionService.AnnounceGroupID(item.Key === null ? null : +item.Key);
          } else if (this.GroupColumn === "PubDate") {
            var newDate = new Date(item.Key);
            if (item.Key === null) newDate = null;else newDate = new Date(newDate.getUTCFullYear(), newDate.getUTCMonth(), newDate.getUTCDate());
            this.sessionService.AnnounceDateFilter(newDate);
          } else throw new Error("GroupColumn not recognized: " + this.GroupColumn);
        }
      }, {
        key: "isActive",
        value: function isActive(itemID) {
          return this.SelectedItem.Key === itemID;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.siteSubscription.unsubscribe();
        }
      }]);

      return GroupFilterComponent;
    }();

    GroupFilterComponent.ɵfac = function GroupFilterComponent_Factory(t) {
      return new (t || GroupFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blogService__WEBPACK_IMPORTED_MODULE_3__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sessionService__WEBPACK_IMPORTED_MODULE_4__["SessionService"]));
    };

    GroupFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupFilterComponent,
      selectors: [["app-group-filter"]],
      inputs: {
        GroupColumn: "GroupColumn"
      },
      decls: 4,
      vars: 3,
      consts: [["class", "groupFilterHeader", 4, "ngIf"], [1, "groupFilter", 2, "list-style-type", "none"], [4, "ngFor", "ngForOf"], [1, "groupFilterHeader"], [1, "bx", "bxs-flag-alt"], [1, "bx", "bx-calendar"], ["type", "button", 3, "click"]],
      template: function GroupFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupFilterComponent_div_0_Template, 4, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupFilterComponent_div_1_Template, 4, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupFilterComponent_li_3_Template, 4, 3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.GroupColumn === "GroupID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.GroupColumn === "PubDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwLWZpbHRlci9ncm91cC1maWx0ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-filter',
          templateUrl: './group-filter.component.html',
          styleUrls: ['./group-filter.component.css']
        }]
      }], function () {
        return [{
          type: _services_blogService__WEBPACK_IMPORTED_MODULE_3__["BlogService"]
        }, {
          type: _services_sessionService__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      }, {
        GroupColumn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_blogService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/blogService */
    "./src/app/services/blogService.ts");
    /* harmony import */


    var _services_sessionService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/sessionService */
    "./src/app/services/sessionService.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(blogService, sessionService) {
        _classCallCheck(this, HomeComponent);

        this.blogService = blogService;
        this.sessionService = sessionService;
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCoffee"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        this.faArrowUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowUp"];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.blogService.GetActiveSites().subscribe(function (sites) {
            return _this5.sites = sites;
          });
          this.blogModeSubscription = this.sessionService.blogModeAnnouncedSource$.subscribe(function (x) {});
          this.sessionService.AnnounceBlogMode(0);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.blogModeSubscription.unsubscribe();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {// initJS();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blogService__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sessionService__WEBPACK_IMPORTED_MODULE_3__["SessionService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 535,
      vars: 2,
      consts: [["href", "assets/img/favicon.png", "rel", "icon"], ["href", "assets/img/apple-touch-icon.png", "rel", "apple-touch-icon"], ["href", "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i", "rel", "stylesheet"], ["type", "button", 1, "mobile-nav-toggle", "d-xl-none"], [3, "icon"], ["id", "hero", 1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "align-items-left", "hero-container"], ["data-aos", "fade-in"], ["data-typed-items", "Enterprise Application Developer, Database Developer, Web Developer, Enterprise Application Architect", 1, "typed", "align-items-left"], ["id", "main"], ["id", "about", 1, "about"], [1, "container"], [1, "section-title"], [1, "row"], ["data-aos", "fade-right", 1, "col-lg-4"], ["src", "assets/img/profile-img.jpg", "alt", "", 1, "img-fluid"], ["data-aos", "fade-left", 1, "col-lg-8", "pt-4", "pt-lg-0", "content"], [1, "font-italic"], [1, "col-lg-6"], [1, "icofont-rounded-right"], ["id", "facts", 1, "facts"], [1, "row", "no-gutters"], ["data-aos", "fade-up", 1, "col-lg-3", "col-md-6", "d-md-flex", "align-items-md-stretch"], [1, "count-box"], [1, "icofont-simple-smile"], ["data-toggle", "counter-up"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-3", "col-md-6", "d-md-flex", "align-items-md-stretch"], [1, "icofont-document-folder"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-3", "col-md-6", "d-md-flex", "align-items-md-stretch"], [1, "icofont-live-support"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-3", "col-md-6", "d-md-flex", "align-items-md-stretch"], [1, "icofont-users-alt-5"], ["id", "skills", 1, "skills", "section-bg"], [1, "row", "skills-content"], ["data-aos", "fade-up", 1, "col-lg-6"], [1, "progress"], [1, "skill"], [1, "val"], [1, "progress-bar-wrap"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], ["role", "progressbar", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-6"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], ["role", "progressbar", "aria-valuenow", "55", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"], ["id", "resume", 1, "resume"], [1, "resume-title"], [1, "resume-item", "pb-0"], [1, "resume-item"], ["id", "blogIndex", 1, "portfolio", "section-bg"], ["data-aos", "fade-up", 1, "row"], [1, "col-lg-12", "d-flex", "justify-content-center"], ["id", "portfolio-flters"], ["data-filter", "*", 1, "filter-active"], ["data-filter", ".filter-app"], ["data-filter", ".filter-card"], ["data-filter", ".filter-web"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "row", "portfolio-container"], [1, "col-lg-4", "col-md-6", "portfolio-item", "filter-app"], [1, "portfolio-wrap"], ["src", "assets/img/portfolio/portfolio-1.jpg", "alt", "", 1, "img-fluid"], [1, "portfolio-links"], ["href", "assets/img/portfolio/portfolio-1.jpg", "data-gall", "portfolioGallery", "title", "App 1", 1, "venobox"], [1, "bx", "bx-plus"], ["href", "portfolio-details.html", "title", "More Details"], [1, "bx", "bx-link"], [1, "col-lg-4", "col-md-6", "portfolio-item", "filter-web"], ["src", "assets/img/portfolio/portfolio-2.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-2.jpg", "data-gall", "portfolioGallery", "title", "Web 3", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-3.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-3.jpg", "data-gall", "portfolioGallery", "title", "App 2", 1, "venobox"], [1, "col-lg-4", "col-md-6", "portfolio-item", "filter-card"], ["src", "assets/img/portfolio/portfolio-4.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-4.jpg", "data-gall", "portfolioGallery", "title", "Card 2", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-5.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-5.jpg", "data-gall", "portfolioGallery", "title", "Web 2", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-6.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-6.jpg", "data-gall", "portfolioGallery", "title", "App 3", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-7.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-7.jpg", "data-gall", "portfolioGallery", "title", "Card 1", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-8.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-8.jpg", "data-gall", "portfolioGallery", "title", "Card 3", 1, "venobox"], ["src", "assets/img/portfolio/portfolio-9.jpg", "alt", "", 1, "img-fluid"], ["href", "assets/img/portfolio/portfolio-9.jpg", "data-gall", "portfolioGallery", "title", "Web 3", 1, "venobox"], ["id", "technologies", 1, "services"], ["data-aos", "fade-up", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "icon"], [1, "icofont-computer"], [1, "title"], ["href", ""], [1, "description"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "icofont-chart-bar-graph"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "icofont-earth"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "icofont-image"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "icofont-settings"], ["data-aos", "fade-up", "data-aos-delay", "500", 1, "col-lg-4", "col-md-6", "icon-box"], [1, "icofont-tasks-alt"], ["id", "testimonials", 1, "testimonials", "section-bg"], [1, "owl-carousel", "testimonials-carousel"], ["data-aos", "fade-up", 1, "testimonial-item"], [1, "bx", "bxs-quote-alt-left", "quote-icon-left"], [1, "bx", "bxs-quote-alt-right", "quote-icon-right"], ["src", "assets/img/testimonials/testimonials-1.jpg", "alt", "", 1, "testimonial-img"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "testimonial-item"], ["src", "assets/img/testimonials/testimonials-2.jpg", "alt", "", 1, "testimonial-img"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "testimonial-item"], ["src", "assets/img/testimonials/testimonials-3.jpg", "alt", "", 1, "testimonial-img"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "testimonial-item"], ["src", "assets/img/testimonials/testimonials-4.jpg", "alt", "", 1, "testimonial-img"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "testimonial-item"], ["src", "assets/img/testimonials/testimonials-5.jpg", "alt", "", 1, "testimonial-img"], ["id", "contact", 1, "contact"], ["data-aos", "fade-in", 1, "row"], [1, "col-lg-5", "d-flex", "align-items-stretch"], [1, "info"], [1, "address"], [1, "icofont-google-map"], [1, "email"], [1, "icofont-envelope"], [1, "phone"], [1, "icofont-phone"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621", "frameborder", "0", "allowfullscreen", "", 2, "border", "0", "width", "100%", "height", "290px"], [1, "col-lg-7", "mt-5", "mt-lg-0", "d-flex", "align-items-stretch"], ["action", "forms/contact.php", "method", "post", "role", "form", 1, "php-email-form"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "name"], ["type", "text", "name", "name", "id", "name", "data-rule", "minlen:4", "data-msg", "Please enter at least 4 chars", 1, "form-control"], [1, "validate"], ["type", "email", "name", "email", "id", "email", "data-rule", "email", "data-msg", "Please enter a valid email", 1, "form-control"], [1, "form-group"], ["type", "text", "name", "subject", "id", "subject", "data-rule", "minlen:4", "data-msg", "Please enter at least 8 chars of subject", 1, "form-control"], ["name", "message", "rows", "10", "data-rule", "required", "data-msg", "Please write something for us", 1, "form-control"], [1, "mb-3"], [1, "loading"], [1, "error-message"], [1, "sent-message"], [1, "text-center"], ["type", "submit"], ["id", "footer"], [1, "copyright"], [1, "credits"], ["href", "https://bootstrapmade.com/"], ["href", "#", 1, "back-to-top"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sam Wheat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "main", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "UI/UX Designer & Web Developer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Birthday:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 1 May 1995");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Website:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " www.example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " +123 456 7890");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "City:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " City : New York, USA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Degree:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Master");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "PhEmailone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " email@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Freelance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Facts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "232");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Happy Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " consequuntur quae");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "521");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " adipisci atque cum quia aut");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "1,463");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Hours Of Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " aut commodi quaerat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "15");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Hard Workers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " rerum asperiores dolor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "section", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "HTML ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "CSS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "90%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "JavaScript ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "75%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "PHP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "80%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "WordPress/CMS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "90%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Photoshop ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "55%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "section", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h3", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Sumary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Sam Wheat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Portland par 127,Orlando, FL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "(123) 456-7891");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "alice.barkley@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h3", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Master of Fine Arts & Graphic Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "2015 - 2016");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Rochester Institute of Technology, Rochester, NY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Bachelor of Fine Arts & Graphic Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "2010 - 2014");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Rochester Institute of Technology, Rochester, NY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h3", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Professional Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Senior graphic design specialist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "2019 - Present");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Experion, New York, NY ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Lead in the design, development, and implementation of the graphic, layout, and production communication materials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Graphic design specialist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "2017 - 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Stepping Stone Advertising, New York, NY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Managed up to 5 projects or tasks at a given time while under pressure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Recommended and consulted with clients on the most appropriate graphic design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Created 4+ design presentations and proposals a month for clients and account managers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "section", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "ul", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "a", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "img", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "img", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "img", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "section", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "i", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "h4", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Lorem Ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "i", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "h4", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Dolor Sitema");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "i", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "h4", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Sed ut perspiciatis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "i", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "h4", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Magni Dolores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "h4", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Nemo Enim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "i", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "h4", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Eiusmod Tempor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "section", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Testimonials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, " Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "img", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Saul Goodman");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Ceo & Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, " Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Sara Wilsson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, " Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "img", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Jena Karlis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Store Owner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, " Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "img", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Matt Brandon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Freelancer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, " Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "img", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "John Larson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Entrepreneur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "section", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "i", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "A108 Adam Street, New York, NY 535022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](477, "i", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "info@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "i", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Call:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "+1 5589 55488 55s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "iframe", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "form", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "label", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "Your Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "input", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](496, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "label", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Your Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](500, "input", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "label", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](505, "input", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](506, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "label", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](510, "textarea", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Your message has been sent. Thank you!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "button", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "Send Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "footer", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "div", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, " \xA9 Copyright ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "iPortfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, " Designed by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "a", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "BootstrapMade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "a", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](534, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBars);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](529);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowUp);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _services_blogService__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
        }, {
          type: _services_sessionService__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/model.ts":
  /*!********************************!*\
    !*** ./src/app/model/model.ts ***!
    \********************************/

  /*! exports provided: Comment, ContentGroup, ContentItem, MenuContentItem, Menu, Site, KeyValuePair, AsyncResult */

  /***/
  function srcAppModelModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Comment", function () {
      return Comment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentGroup", function () {
      return ContentGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentItem", function () {
      return ContentItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuContentItem", function () {
      return MenuContentItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Menu", function () {
      return Menu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Site", function () {
      return Site;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyValuePair", function () {
      return KeyValuePair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsyncResult", function () {
      return AsyncResult;
    });

    var Comment = function Comment() {
      _classCallCheck(this, Comment);

      this.ID = 0;
      this.ParentID = null; // nullable

      this.ContentItemID = 0;
      this.Date = new Date(1, 1, 1);
      this.SenderName = null;
      this.SenderEMail = null;
      this.SenderWebsite = null;
      this.SenderIPAddress = null;
      this.CommentText = null;
      this.Approved = false;
    };

    var ContentGroup = function ContentGroup() {
      _classCallCheck(this, ContentGroup);
    };

    var ContentItem = function ContentItem() {
      _classCallCheck(this, ContentItem);
    };

    var MenuContentItem = function MenuContentItem() {
      _classCallCheck(this, MenuContentItem);
    };

    var Menu = function Menu() {
      _classCallCheck(this, Menu);
    };

    var Site = function Site() {
      _classCallCheck(this, Site);
    };

    var KeyValuePair = function KeyValuePair() {
      _classCallCheck(this, KeyValuePair);
    };

    var AsyncResult = function AsyncResult() {
      _classCallCheck(this, AsyncResult);
    };
    /***/

  },

  /***/
  "./src/app/services/HttpErrorHandler.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/HttpErrorHandler.ts ***!
    \**********************************************/

  /*! exports provided: HttpErrorHandler */

  /***/
  function srcAppServicesHttpErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function () {
      return HttpErrorHandler;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _MessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./MessageService */
    "./src/app/services/MessageService.ts");
    /** Handles HttpClient errors */


    var HttpErrorHandler = /*#__PURE__*/function () {
      function HttpErrorHandler(messageService) {
        var _this6 = this;

        _classCallCheck(this, HttpErrorHandler);

        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */

        this.createHandleError = function () {
          var serviceName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return function () {
            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return _this6.handleError(serviceName, operation, result);
          };
        };
      }
      /**
       * Returns a function that handles Http operation failures.
       * This error handler lets the app continue to run as if no error occurred.
       * @param serviceName = name of the data service that attempted the operation
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */


      _createClass(HttpErrorHandler, [{
        key: "handleError",
        value: function handleError() {
          var _this7 = this;

          var serviceName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'operation';
          var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            var message = error.error instanceof ErrorEvent ? error.error.message : "server returned code ".concat(error.status, " with body \"").concat(error.error, "\""); // TODO: better job of transforming error for user consumption

            _this7.messageService.add("".concat(serviceName, ": ").concat(operation, " failed: ").concat(message)); // Let the app keep running by returning a safe result.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
          };
        }
      }]);

      return HttpErrorHandler;
    }();

    HttpErrorHandler.ɵfac = function HttpErrorHandler_Factory(t) {
      return new (t || HttpErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_MessageService__WEBPACK_IMPORTED_MODULE_2__["MessageService"]));
    };

    HttpErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpErrorHandler,
      factory: HttpErrorHandler.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _MessageService__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/MessageService.ts":
  /*!********************************************!*\
    !*** ./src/app/services/MessageService.ts ***!
    \********************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppServicesMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MessageService = /*#__PURE__*/function () {
      function MessageService() {
        _classCallCheck(this, MessageService);

        this.messages = [];
      }

      _createClass(MessageService, [{
        key: "add",
        value: function add(message) {
          this.messages.push(message);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.messages = [];
        }
      }]);

      return MessageService;
    }();

    MessageService.ɵfac = function MessageService_Factory(t) {
      return new (t || MessageService)();
    };

    MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MessageService,
      factory: MessageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/blogService.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/blogService.ts ***!
    \*****************************************/

  /*! exports provided: BlogService */

  /***/
  function srcAppServicesBlogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogService", function () {
      return BlogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _HttpErrorHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./HttpErrorHandler */
    "./src/app/services/HttpErrorHandler.ts");

    var BlogService = /*#__PURE__*/function () {
      //private handleError: HandleError;
      function BlogService(httpClient, httpErrorHandler) {
        _classCallCheck(this, BlogService);

        this.httpClient = httpClient;
        this.httpErrorHandler = httpErrorHandler;
        this.serviceURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL; //this.handleError = httpErrorHandler.createHandleError('BlogService');
      }

      _createClass(BlogService, [{
        key: "GetActiveSites",
        value: function GetActiveSites() {
          var _this8 = this;

          var url = this.serviceURL + 'GetActiveSites';
          return this.httpClient.get(this.noCache(url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return _this8.log("GetActiveSites");
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('GetActiveSites', [])));
        }
      }, {
        key: "GetContentItems",
        value: function GetContentItems(siteID, menuID, groupID, dateFilter) {
          var _this9 = this;

          var stringDate = ""; // date.tolocalString() leaves embeded chars that cause .net to fail when attempting to convert the date.

          if (dateFilter !== null) stringDate = dateFilter.getUTCFullYear() + '-' + (+dateFilter.getUTCMonth() + 1) + '-' + dateFilter.getUTCDate();
          var url = this.serviceURL + 'GetContentItems?siteID=' + siteID.toString() + '&menuID=' + menuID.toString() + '&groupID=' + groupID + '&dateFilter=' + stringDate;
          return this.httpClient.get(this.noCache(url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return _this9.log("GetContentItems");
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('GetContentItems', [])));
        }
      }, {
        key: "GetContentItemBySlug",
        value: function GetContentItemBySlug(slug, siteID) {
          var _this10 = this;

          var url = this.serviceURL + 'GetContentItemBySlug?slug=' + slug + '&siteID=' + siteID.toString();
          return this.httpClient.get(this.noCache(url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return _this10.log("GetContentItemBySlug");
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('GetContentItemBySlug', null))); //return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
          //.catch(this.handleError);
        }
      }, {
        key: "GetContentItemGroups",
        value: function GetContentItemGroups(groupColumn, menuID) {
          var _this11 = this;

          var url = this.serviceURL + 'GetContentItemGroups?groupColumn=' + groupColumn + '&menuID=' + menuID.toString();
          return this.httpClient.get(this.noCache(url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return _this11.log("GetContentItemGroups");
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('GetContentItemGroups', []))); //return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
          //.catch(this.handleError);
        }
      }, {
        key: "GetPostHtml",
        value: function GetPostHtml(url) {
          var _this12 = this;

          // note that this.httpClient is not generic 
          return this.httpClient.get(this.noCache(url), {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return _this12.log("GetPostHtml");
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('GetPostHtml', null)));
        }
      }, {
        key: "GetCommentsForContentItem",
        value: function GetCommentsForContentItem(contentItemID) {
          var _this13 = this;

          var url = this.serviceURL + 'GetCommentsForContentItem?contentItemID=' + contentItemID.toString();
          return this.httpClient.get(this.noCache(url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
            return _this13.log("GetCommentsForContentItem");
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('GetCommentsForContentItem', []))); //return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
          //  .catch(this.handleError);
        }
      }, {
        key: "SaveComment",
        value: function SaveComment(comment, captchaCode) {
          var url = this.serviceURL + 'SaveComment?captcha=' + captchaCode;
          var commentString = JSON.stringify(comment);
          return this.httpClient.post(this.noCache(url), commentString); //.pipe(tap(_ => this.log(`SaveComment`)), catchError(this.handleError<AsyncResult>('SaveComment', null)));
          //return this.http.post(this.noCache(url), commentString, { headers: headers }).pipe(map(response => this.extractData(response)));
          //.catch(this.handleError);
        }
      }, {
        key: "CaptchaImageURL",
        value: function CaptchaImageURL() {
          return this.noCache(this.serviceURL + "GetCaptchaImage");
        }
      }, {
        key: "extractData",
        value: function extractData(res) {
          if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
          }

          var body = res.json();
          return body || [];
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var _this14 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error);

            _this14.log('${operation} failed: ${error.message}');

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
          };
        }
      }, {
        key: "xhandleError",
        value: function xhandleError(error) {
          var errorMsg = error.message || 'Server error';
          console.error(errorMsg);
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]["throw"](errorMsg);
        }
      }, {
        key: "log",
        value: function log(message) {}
      }, {
        key: "noCache",
        value: function noCache(url) {
          if (url === null || typeof url === 'undefined') return null;
          if (url.slice(-1) === '/') url = url.slice(0, -1);
          var connector = url.lastIndexOf('?') > 0 ? '&' : '?';
          url = url + connector + 'noCache=' + Math.random().toString().replace('.', '');
          return url;
        }
      }, {
        key: "DateToString",
        value: function DateToString(d) {
          if (d === null) return null;
          var result = '';
          result = d.getUTCFullYear() + '-';
          if (d.getUTCMonth() < 9) result += '0' + (d.getUTCMonth() + 1) + '-';else result += d.getUTCMonth() + 1 + '-';
          if (d.getUTCDate() < 10) result += '0' + d.getUTCDate();else result += d.getUTCDate();
          return result;
        }
      }]);

      return BlogService;
    }();

    BlogService.ɵfac = function BlogService_Factory(t) {
      return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_HttpErrorHandler__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandler"]));
    };

    BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BlogService,
      factory: BlogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _HttpErrorHandler__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandler"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/sessionService.ts":
  /*!********************************************!*\
    !*** ./src/app/services/sessionService.ts ***!
    \********************************************/

  /*! exports provided: SessionService */

  /***/
  function srcAppServicesSessionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionService", function () {
      return SessionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SessionService = /*#__PURE__*/function () {
      function SessionService() {
        _classCallCheck(this, SessionService);

        this.siteAnnouncedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"](); // BehaviorSubject

        this.siteAnnounced$ = this.siteAnnouncedSource.asObservable();
        this.groupIDAnnouncedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.groupAnnounced$ = this.groupIDAnnouncedSource.asObservable();
        this.menuIDAnnouncedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.menuIDAnnouncedSource$ = this.menuIDAnnouncedSource.asObservable();
        this.dateFilterAnnouncedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dateFilterAnnouncedSource$ = this.dateFilterAnnouncedSource.asObservable();
        this.blogModeAnnouncedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.blogModeAnnouncedSource$ = this.blogModeAnnouncedSource.asObservable();
        this.ImageRoot = "/assets/images/";
        this.PostRoot = "/articles/";
        this.CurrentSite = null;
        this.CurrentMenuID = 0;
        this.CurrentGroupID = 0;
        this.CurrentDateFilter = new Date('01/01/1901');
        this.CurrentBlogMode = 0;
      }

      _createClass(SessionService, [{
        key: "AnnounceSite",
        value: function AnnounceSite(site) {
          this.CurrentSite = site;
          this.siteAnnouncedSource.next(this.CurrentSite);
        }
      }, {
        key: "AnnounceGroupID",
        value: function AnnounceGroupID(groupID) {
          if (this.CurrentGroupID === groupID) return;
          this.CurrentGroupID = groupID;
          this.groupIDAnnouncedSource.next(groupID);
        }
      }, {
        key: "AnnounceMenuID",
        value: function AnnounceMenuID(menuID) {
          if (this.CurrentMenuID === menuID) return;
          this.CurrentMenuID = menuID;
          this.groupIDAnnouncedSource.next(menuID);
        }
      }, {
        key: "AnnounceDateFilter",
        value: function AnnounceDateFilter(dateFilter) {
          if (this.CurrentDateFilter === dateFilter) return;
          this.CurrentDateFilter = dateFilter;
          this.dateFilterAnnouncedSource.next(dateFilter);
        }
      }, {
        key: "AnnounceBlogMode",
        value: function AnnounceBlogMode(mode) {
          if (this.CurrentBlogMode === mode) return;
          this.CurrentBlogMode = mode;
          this.blogModeAnnouncedSource.next(mode);
        }
      }, {
        key: "IsInitialized",
        value: function IsInitialized() {
          var isInitialized = this.CurrentSite !== null && this.CurrentGroupID !== 0 && this.CurrentMenuID !== 0 && (this.CurrentDateFilter !== null && this.CurrentDateFilter.getFullYear() !== 1901 || this.CurrentDateFilter === null);
          return isInitialized;
        }
      }]);

      return SessionService;
    }();

    SessionService.ɵfac = function SessionService_Factory(t) {
      return new (t || SessionService)();
    };

    SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SessionService,
      factory: SessionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/side-nav/side-nav.component.ts":
  /*!************************************************!*\
    !*** ./src/app/side-nav/side-nav.component.ts ***!
    \************************************************/

  /*! exports provided: SideNavComponent */

  /***/
  function srcAppSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/model */
    "./src/app/model/model.ts");
    /* harmony import */


    var _services_sessionService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/sessionService */
    "./src/app/services/sessionService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _group_filter_group_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../group-filter/group-filter.component */
    "./src/app/group-filter/group-filter.component.ts");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var _c1 = function _c1() {
      return ["/blogIndex"];
    };

    function SideNavComponent_nav_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " About");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Technologies");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Clients");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Contact");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_nav_18_Template_a_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleBlogMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Blog");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
      }
    }

    function SideNavComponent_nav_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-group-filter", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-group-filter", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SideNavComponent = /*#__PURE__*/function () {
      function SideNavComponent(sessionService, router) {
        _classCallCheck(this, SideNavComponent);

        this.sessionService = sessionService;
        this.router = router;
      }

      _createClass(SideNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.mainMenu = new _model_model__WEBPACK_IMPORTED_MODULE_1__["Menu"]();
          this.mainMenu.MenuContentItems = [];
          this.subscription = this.sessionService.siteAnnouncedSource.subscribe(function (s) {
            if (s === null) return;
            var navBar = s.Menus.find(function (x) {
              return x.MenuName === "NavBar";
            });

            if (navBar !== null && navBar !== undefined) {
              _this15.mainMenu = navBar;

              _this15.sessionService.AnnounceMenuID(navBar.ID);
            }
          });
        }
      }, {
        key: "onClick",
        value: function onClick(menuItem) {
          this.selectedMenuItem = menuItem;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "isActive",
        value: function isActive(menuItem) {
          var result = false;
          if (menuItem === null) return result;
          if (menuItem.startsWith("/BlogIndex") && this.router.url.startsWith("/Post")) result = true;else result = menuItem === this.router.url;
          return result;
        }
      }, {
        key: "toggleBlogMode",
        value: function toggleBlogMode() {
          var blogMode = this.sessionService.CurrentBlogMode === 0 ? 1 : 0;
          this.sessionService.AnnounceBlogMode(blogMode);
        }
      }]);

      return SideNavComponent;
    }();

    SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
      return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sessionService__WEBPACK_IMPORTED_MODULE_2__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideNavComponent,
      selectors: [["app-side-nav"]],
      decls: 24,
      vars: 6,
      consts: [["id", "header"], [1, "d-flex", "flex-column"], [1, "profile"], ["src", "assets/img/profile-img.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "text-light"], ["href", "index.html"], [1, "social-links", "mt-3", "text-center"], ["href", "#", 1, "twitter"], [1, "bx", "bxl-twitter"], ["href", "#", 1, "facebook"], [1, "bx", "bxl-facebook"], ["href", "#", 1, "instagram"], [1, "bx", "bxl-instagram"], ["href", "#", 1, "google-plus"], [1, "bx", "bxl-skype"], ["href", "#", 1, "linkedin"], [1, "bx", "bxl-linkedin"], ["class", "nav-menu", 4, "ngIf"], ["type", "button", 1, "mobile-nav-toggle", "d-xl-none"], [1, "icofont-navigation-menu"], [1, "nav-menu"], [1, "active"], ["fragment", "hero", "data-target", "#hero", 3, "routerLink"], [1, "bx", "bx-home"], ["fragment", "about", "data-target", "#about", 3, "routerLink"], [1, "bx", "bx-user"], ["fragment", "technologies", "data-target", "#technologies", 3, "routerLink"], [1, "bx", "bx-server"], ["fragment", "resume", "data-target", "#resume", 3, "routerLink"], [1, "bx", "bx-file-blank"], ["fragment", "contact", "data-target", "#contact", 3, "routerLink"], [1, "bx", "bx-envelope"], ["data-target", "#blogIndex", 3, "routerLink", "click"], [1, "bx", "bx-book-content"], ["href", "/"], ["GroupColumn", "GroupID"], ["GroupColumn", "PubDate"]],
      template: function SideNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sam Wheat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SideNavComponent_nav_18_Template, 32, 12, "nav", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SideNavComponent_nav_20_Template, 9, 0, "nav", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 2, ctx.sessionService.blogModeAnnouncedSource$) === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 4, ctx.sessionService.blogModeAnnouncedSource$) === 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _group_filter_group_filter_component__WEBPACK_IMPORTED_MODULE_5__["GroupFilterComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-nav',
          templateUrl: './side-nav.component.html',
          styleUrls: ['./side-nav.component.css']
        }]
      }], function () {
        return [{
          type: _services_sessionService__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      API_URL: "http://localhost:53389/api/Blog/"
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Git\Blog\Blog\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map