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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DialogComponent = (function () {
    function DialogComponent() {
        this.dialog = Dialog;
        this.visibleDialog = new BehaviorSubject_1.BehaviorSubject(Dialog.None);
    }
    DialogComponent.prototype.showErrorMessage = function (msg) {
        this.message = msg;
        this.visibleDialog.next(Dialog.ErrorMsg);
    };
    DialogComponent.prototype.hideDialog = function () {
        this.visibleDialog.next(Dialog.None);
    };
    DialogComponent.prototype.showConfirmation = function (msg, callBack) {
        this.confirmCallBack = callBack;
        this.message = msg;
        this.visibleDialog.next(Dialog.Confirm);
    };
    DialogComponent.prototype.hideConfirmDialog = function (response) {
        this.visibleDialog.next(Dialog.None);
        this.confirmCallBack(response);
    };
    DialogComponent.prototype.showWaitDialog = function () {
        this.visibleDialog.next(Dialog.Wait);
    };
    DialogComponent.prototype.hideWaitDialog = function () {
        this.visibleDialog.next(Dialog.None);
    };
    DialogComponent.prototype.showInfoDialog = function (msg) {
        this.message = msg;
        this.visibleDialog.next(Dialog.Info);
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    core_1.Component({
        selector: 'app-dialog-component',
        templateUrl: './app/common/dialogComponent.html',
    }),
    __metadata("design:paramtypes", [])
], DialogComponent);
exports.DialogComponent = DialogComponent;
var Dialog;
(function (Dialog) {
    Dialog[Dialog["None"] = 0] = "None";
    Dialog[Dialog["ErrorMsg"] = 1] = "ErrorMsg";
    Dialog[Dialog["Wait"] = 2] = "Wait";
    Dialog[Dialog["Confirm"] = 3] = "Confirm";
    Dialog[Dialog["Info"] = 4] = "Info";
})(Dialog = exports.Dialog || (exports.Dialog = {}));
;
//# sourceMappingURL=dialogComponent.js.map