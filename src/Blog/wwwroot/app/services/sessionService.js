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
var Subject_1 = require("rxjs/Subject");
var AsyncSubject_1 = require("rxjs/AsyncSubject");
var SessionService = (function () {
    function SessionService() {
        this.siteAnnouncedSource = new AsyncSubject_1.AsyncSubject(); // BehaviorSubject
        this.siteAnnounced$ = this.siteAnnouncedSource.asObservable();
        this.groupIDAnnouncedSource = new Subject_1.Subject();
        this.groupAnnounced$ = this.groupIDAnnouncedSource.asObservable();
        this.menuIDAnnouncedSource = new Subject_1.Subject();
        this.menuIDAnnouncedSource$ = this.menuIDAnnouncedSource.asObservable();
        this.dateFilterAnnouncedSource = new Subject_1.Subject();
        this.dateFilterAnnouncedSource$ = this.dateFilterAnnouncedSource.asObservable();
        this.ImageRoot = "/images/";
        this.PostRoot = "/articles/";
        this.CurrentSite = null;
        this.CurrentMenuID = 0;
        this.CurrentGroupID = 0;
        this.CurrentDateFilter = new Date('01/01/1901');
    }
    SessionService.prototype.AnnounceSite = function (site) {
        this.CurrentSite = site;
        this.siteAnnouncedSource.next(this.CurrentSite);
        this.siteAnnounced$;
    };
    SessionService.prototype.AnnounceGroupID = function (groupID) {
        this.CurrentGroupID = groupID;
        this.groupIDAnnouncedSource.next(this.CurrentGroupID);
    };
    SessionService.prototype.AnnounceMenuID = function (menuID) {
        this.CurrentMenuID = menuID;
        this.groupIDAnnouncedSource.next(this.CurrentMenuID);
    };
    SessionService.prototype.AnnounceDateFilter = function (dateFilter) {
        this.CurrentDateFilter = dateFilter;
        this.dateFilterAnnouncedSource.next(this.CurrentDateFilter);
    };
    SessionService.prototype.IsInitialized = function () {
        var isInitialized = this.CurrentSite !== null &&
            this.CurrentGroupID !== 0 &&
            this.CurrentMenuID !== 0 &&
            ((this.CurrentDateFilter !== null && this.CurrentDateFilter.getFullYear() !== 1901) || this.CurrentDateFilter === null);
        return isInitialized;
    };
    return SessionService;
}());
SessionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=SessionService.js.map