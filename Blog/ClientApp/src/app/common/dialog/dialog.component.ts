import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public visibleDialog: Subject<Dialog> 
  private message: string;
  private confirmCallBack: IConfirmation;
  dialog = Dialog;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.visibleDialog = new BehaviorSubject(Dialog.None);
  }

  ngOnInit() {
    
    
  }

  public showErrorMessage(msg: string) {
    this.message = msg;
    this.visibleDialog.next(Dialog.ErrorMsg);

  }

  private hideDialog() {
    this.visibleDialog.next(Dialog.None);
  }

  public showConfirmation(msg: string, callBack: IConfirmation) {
    this.confirmCallBack = callBack;
    this.message = msg;
    this.visibleDialog.next(Dialog.Confirm);
  }

  private hideConfirmDialog(response: boolean) {
    this.visibleDialog.next(Dialog.None);
    this.confirmCallBack(response);
  }

  public showWaitDialog() {
    
    this.visibleDialog.next(Dialog.Wait);
    
  }

  public hideWaitDialog() {
    this.visibleDialog.next(Dialog.None);
  }

  public showInfoDialog(msg: string) {
    this.message = msg;
    this.visibleDialog.next(Dialog.Info);
  }
}
export enum Dialog { None, ErrorMsg, Wait, Confirm, Info };
export interface IConfirmation {
  (result: boolean): void;
}
