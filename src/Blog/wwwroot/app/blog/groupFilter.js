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
var BlogService_1 = require("../services/BlogService");
var model_1 = require("../model/model");
var GroupFilter = (function () {
    function GroupFilter(blogService, sessionService) {
        this.blogService = blogService;
        this.sessionService = sessionService;
    }
    GroupFilter.prototype.ngOnInit = function () {
        var _this = this;
        this.siteSubscription = this.sessionService.siteAnnouncedSource.subscribe(function (x) {
            var blogIndex = x.Menus.find(function (x) { return x.MenuName === "BlogIndex"; });
            _this.menuID = blogIndex.ID;
            _this.blogService.GetContentItemGroups(_this.GroupColumn, _this.menuID)
                .subscribe(function (groups) {
                _this.initializeGroupData(groups);
            });
        });
    };
    GroupFilter.prototype.initializeGroupData = function (groups) {
        if (groups === null || groups.length === 0)
            return;
        var kvp = new model_1.KeyValuePair();
        if (this.sessionService.IsInitialized()) {
            if (this.GroupColumn === "GroupID")
                kvp.Key = (this.sessionService.CurrentGroupID + 0 === this.sessionService.CurrentGroupID) ? this.sessionService.CurrentGroupID + '' : null;
            else if (this.GroupColumn === "PubDate")
                kvp.Key = this.blogService.DateToString(this.sessionService.CurrentDateFilter);
            else
                throw ("groupFilter.GroupColumn has an unexpected value: " + this.GroupColumn);
        }
        else
            kvp = groups[0];
        this.onChangeGroup(kvp);
        this.Items = groups;
    };
    GroupFilter.prototype.onChangeGroup = function (item) {
        this.SelectedItem = item;
        if (this.GroupColumn === "GroupID") {
            this.sessionService.AnnounceGroupID(item.Key === null ? null : +item.Key);
        }
        else if (this.GroupColumn === "PubDate") {
            var newDate = new Date(item.Key);
            if (item.Key === null)
                newDate = null;
            else
                newDate = new Date(newDate.getUTCFullYear(), newDate.getUTCMonth(), newDate.getUTCDate());
            this.sessionService.AnnounceDateFilter(newDate);
        }
        else
            throw new Error("GroupColumn not recognized: " + this.GroupColumn);
    };
    GroupFilter.prototype.isActive = function (itemID) {
        return this.SelectedItem.Key === itemID;
    };
    GroupFilter.prototype.ngOnDestroy = function () {
        this.siteSubscription.unsubscribe();
    };
    return GroupFilter;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GroupFilter.prototype, "GroupColumn", void 0);
GroupFilter = __decorate([
    core_1.Component({
        selector: 'blog-group-filter',
        templateUrl: 'app/blog/groupFilter.html'
    }),
    __metadata("design:paramtypes", [BlogService_1.BlogService, SessionService_1.SessionService])
], GroupFilter);
exports.GroupFilter = GroupFilter;
//# sourceMappingURL=groupFilter.js.map