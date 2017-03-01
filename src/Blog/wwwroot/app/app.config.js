"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppConfig = (function () {
    function AppConfig() {
    }
    Object.defineProperty(AppConfig.prototype, "API_URL", {
        get: function () {
            var url = "http://localhost:53389/api/Blog/";
            //var url = "https://localhost:44311/api/Blog/";
            if (typeof process !== 'undefined') {
                console.log('process.env.ENV is ' + process.env.ENV);
                if (process.env.ENV === 'prod') {
                    url = "http://www.samwheat.com/api/api/Blog/";
                }
            }
            else
                console.log('process.env.ENV is undefined');
            return url;
        },
        enumerable: true,
        configurable: true
    });
    return AppConfig;
}());
AppConfig = __decorate([
    core_1.Injectable()
], AppConfig);
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map