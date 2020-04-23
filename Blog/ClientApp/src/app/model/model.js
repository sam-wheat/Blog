"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comment = /** @class */ (function () {
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
var ContentGroup = /** @class */ (function () {
    function ContentGroup() {
    }
    return ContentGroup;
}());
exports.ContentGroup = ContentGroup;
var ContentItem = /** @class */ (function () {
    function ContentItem() {
    }
    return ContentItem;
}());
exports.ContentItem = ContentItem;
var MenuContentItem = /** @class */ (function () {
    function MenuContentItem() {
    }
    return MenuContentItem;
}());
exports.MenuContentItem = MenuContentItem;
var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());
exports.Menu = Menu;
var Site = /** @class */ (function () {
    function Site() {
    }
    return Site;
}());
exports.Site = Site;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
var AsyncResult = /** @class */ (function () {
    function AsyncResult() {
    }
    return AsyncResult;
}());
exports.AsyncResult = AsyncResult;
var SideNavMode;
(function (SideNavMode) {
    SideNavMode[SideNavMode["Site"] = 0] = "Site";
    SideNavMode[SideNavMode["PostIndex"] = 1] = "PostIndex";
    SideNavMode[SideNavMode["Post"] = 2] = "Post";
})(SideNavMode = exports.SideNavMode || (exports.SideNavMode = {}));
;
//# sourceMappingURL=model.js.map