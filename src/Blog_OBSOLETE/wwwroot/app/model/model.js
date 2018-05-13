"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comment = (function () {
    function Comment() {
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
    }
    return Comment;
}());
exports.Comment = Comment;
var ContentGroup = (function () {
    function ContentGroup() {
    }
    return ContentGroup;
}());
exports.ContentGroup = ContentGroup;
var ContentItem = (function () {
    function ContentItem() {
    }
    return ContentItem;
}());
exports.ContentItem = ContentItem;
var MenuContentItem = (function () {
    function MenuContentItem() {
    }
    return MenuContentItem;
}());
exports.MenuContentItem = MenuContentItem;
var Menu = (function () {
    function Menu() {
    }
    return Menu;
}());
exports.Menu = Menu;
var Site = (function () {
    function Site() {
    }
    return Site;
}());
exports.Site = Site;
var KeyValuePair = (function () {
    function KeyValuePair() {
    }
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
var AsyncResult = (function () {
    function AsyncResult() {
    }
    return AsyncResult;
}());
exports.AsyncResult = AsyncResult;
//# sourceMappingURL=model.js.map