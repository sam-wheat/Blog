"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./app.module");
if (typeof process !== 'undefined' && process.env.ENV === 'prod')
    core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
hljs.initHighlightingOnLoad();
//# sourceMappingURL=main.js.map