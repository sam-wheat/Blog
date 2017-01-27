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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var app_config_1 = require("../app.config");
var BlogService = (function () {
    function BlogService(http, appConfig) {
        this.http = http;
        this.serviceURL = appConfig.API_URL;
    }
    BlogService.prototype.GetActiveSites = function () {
        var _this = this;
        var url = this.serviceURL + 'GetActiveSites';
        return this.http.get(this.noCache(url))
            .map(function (response) { return _this.extractData(response); })
            .catch(this.handleError);
    };
    BlogService.prototype.GetContentItems = function (siteID, menuID, groupID, dateFilter) {
        var _this = this;
        var stringDate = "";
        // date.tolocalString() leaves embeded chars that cause .net to fail when attempting to convert the date.
        if (dateFilter !== null)
            stringDate = dateFilter.getUTCFullYear() + '-' + (+dateFilter.getUTCMonth() + 1) + '-' + dateFilter.getUTCDate();
        var url = this.serviceURL + 'GetContentItems?siteID=' + siteID.toString() + '&menuID=' + menuID.toString() + '&groupID=' + groupID + '&dateFilter=' + stringDate;
        return this.http.get(this.noCache(url))
            .map(function (response) { return _this.extractData(response); })
            .catch(this.handleError);
    };
    BlogService.prototype.GetContentItemBySlug = function (slug, siteID) {
        var _this = this;
        var url = this.serviceURL + 'GetContentItemBySlug?slug=' + slug + '&siteID=' + siteID.toString();
        return this.http.get(this.noCache(url))
            .map(function (response) { return _this.extractData(response); })
            .catch(this.handleError);
    };
    BlogService.prototype.GetContentItemGroups = function (groupColumn, menuID) {
        var _this = this;
        var url = this.serviceURL + 'GetContentItemGroups?groupColumn=' + groupColumn + '&menuID=' + menuID.toString();
        return this.http.get(this.noCache(url))
            .map(function (response) { return _this.extractData(response); })
            .catch(this.handleError);
    };
    BlogService.prototype.GetPostHtml = function (url) {
        var headers = new http_2.Headers({ 'Content-Type': 'text/plain' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.get(this.noCache(url), options)
            .map(function (x) {
            return x.text();
        })
            .catch(this.handleError);
    };
    BlogService.prototype.GetCommentsForContentItem = function (contentItemID) {
        var _this = this;
        var url = this.serviceURL + 'GetCommentsForContentItem?contentItemID=' + contentItemID.toString();
        return this.http.get(this.noCache(url))
            .map(function (response) { return _this.extractData(response); })
            .catch(this.handleError);
    };
    BlogService.prototype.SaveComment = function (comment, captchaCode) {
        var _this = this;
        var url = this.serviceURL + 'SaveComment?captcha=' + captchaCode;
        var commentString = JSON.stringify(comment);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.noCache(url), commentString, { headers: headers })
            .map(function (response) { return _this.extractData(response); })
            .catch(this.handleError);
    };
    BlogService.prototype.CaptchaImageURL = function () {
        return this.noCache(this.serviceURL + "GetCaptchaImage");
    };
    BlogService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body || [];
    };
    BlogService.prototype.handleError = function (error) {
        var errorMsg = error.message || 'Server error';
        console.error(errorMsg);
        return Observable_1.Observable.throw(errorMsg);
    };
    BlogService.prototype.noCache = function (url) {
        if (url === null || typeof (url) === 'undefined')
            return null;
        if (url.slice(-1) === '/')
            url = url.slice(0, -1);
        var connector = url.includes('?') ? '&' : '?';
        url = url + connector + 'noCache=' + (Math.random().toString().replace('.', ''));
        return url;
    };
    BlogService.prototype.DateToString = function (d) {
        if (d === null)
            return null;
        var result = '';
        result = (d.getUTCFullYear() + '-');
        if (d.getUTCMonth() < 9)
            result += '0' + (d.getUTCMonth() + 1) + '-';
        else
            result += (d.getUTCMonth() + 1) + '-';
        if (d.getUTCDate() < 10)
            result += '0' + d.getUTCDate();
        else
            result += d.getUTCDate();
        return result;
    };
    return BlogService;
}());
BlogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=BlogService.js.map