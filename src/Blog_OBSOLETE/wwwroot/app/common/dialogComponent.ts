import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-dialog-component',
    templateUrl: './app/common/dialogComponent.html',
})

export class DialogComponent
{
    private visibleDialog :Subject<Dialog>;
    private message: string;
    private confirmCallBack: IConfirmation;
    dialog = Dialog;

    constructor()
    {
        this.visibleDialog = new BehaviorSubject(Dialog.None);
    }

    public showErrorMessage(msg: string)
    {
        this.message = msg;
        this.visibleDialog.next(Dialog.ErrorMsg);
        
    }

    private hideDialog()
    {
        this.visibleDialog.next(Dialog.None);
    }

    public showConfirmation(msg: string, callBack: IConfirmation)
    {
        this.confirmCallBack = callBack;
        this.message = msg;
        this.visibleDialog.next(Dialog.Confirm);
    }

    private hideConfirmDialog(response: boolean)
    {
        this.visibleDialog.next(Dialog.None);
        this.confirmCallBack(response);
    }

    public showWaitDialog()
    {
        this.visibleDialog.next(Dialog.Wait);
    }

    public hideWaitDialog()
    {
        this.visibleDialog.next(Dialog.None);
    }

    public showInfoDialog(msg: string)
    {
        this.message = msg;
        this.visibleDialog.next(Dialog.Info);
    }
}
export enum Dialog { None, ErrorMsg, Wait, Confirm, Info };
export interface IConfirmation {
    (result: boolean): void;
}