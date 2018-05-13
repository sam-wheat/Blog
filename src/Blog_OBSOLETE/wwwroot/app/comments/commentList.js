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
var BlogService_1 = require("./../services/BlogService");
var SessionService_1 = require("./../services/SessionService");
var model_1 = require("../model/model");
var dialogComponent_1 = require("../common/dialogComponent");
var CommentList = (function () {
    function CommentList(sessionService, blogService) {
        this.sessionService = sessionService;
        this.blogService = blogService;
        this.Comments = new Array();
        this.Comment = new model_1.Comment();
        this._captchaURL = null;
    }
    Object.defineProperty(CommentList.prototype, "CaptchaURL", {
        get: function () {
            if (this._captchaURL === null)
                this._captchaURL = this.blogService.CaptchaImageURL();
            return this._captchaURL;
        },
        enumerable: true,
        configurable: true
    });
    CommentList.prototype.ngOnChanges = function (changes) {
        var ci = changes['ContentItem'].currentValue;
        this.LoadComments(ci);
    };
    CommentList.prototype.LoadComments = function (ci) {
        var _this = this;
        if (ci === null || typeof ci === 'undefined' || ci.ID === 0)
            return;
        this.blogService.GetCommentsForContentItem(ci.ID).subscribe(function (x) {
            _this.Comments = x;
        });
    };
    CommentList.prototype.SaveComment = function () {
        var _this = this;
        if (this.Comment === null || typeof this.Comment === 'undefined')
            return;
        this.Comment.Date = new Date();
        if (this.ContentItem !== null && typeof this.ContentItem !== 'undefined')
            this.Comment.ContentItemID = this.ContentItem.ID;
        else
            this.Comment.ContentItemID = null;
        this.dialogComponent.showWaitDialog();
        this.blogService.SaveComment(this.Comment, this.CaptchaCode).subscribe(function (x) {
            _this.dialogComponent.hideWaitDialog();
            _this._captchaURL = null;
            if (x.ErrorMessage !== null && x.ErrorMessage.length > 0)
                _this.dialogComponent.showErrorMessage(x.ErrorMessage);
            else {
                _this.dialogComponent.showInfoDialog("Your comment was saved sucessfully.");
                _this.Comment.SenderName = null;
                _this.Comment.SenderEMail = null;
                _this.Comment.SenderWebsite = null;
                _this.Comment.CommentText = null;
                _this.CaptchaCode = null;
                _this.LoadComments(_this.ContentItem);
            }
        });
    };
    return CommentList;
}());
__decorate([
    core_1.ViewChild(dialogComponent_1.DialogComponent),
    __metadata("design:type", dialogComponent_1.DialogComponent)
], CommentList.prototype, "dialogComponent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", model_1.ContentItem)
], CommentList.prototype, "ContentItem", void 0);
CommentList = __decorate([
    core_1.Component({
        selector: 'blog-comment-list',
        templateUrl: './app/comments/commentList.html'
    }),
    __metadata("design:paramtypes", [SessionService_1.SessionService, BlogService_1.BlogService])
], CommentList);
exports.CommentList = CommentList;
//# sourceMappingURL=commentList.js.map