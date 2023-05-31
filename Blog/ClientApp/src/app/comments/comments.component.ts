import { Component, Input, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { BlogService } from './../services/blogService';
import { SessionService } from './../services/sessionService';
import { ContentItem, Comment, AsyncResult } from '../model/model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnChanges {
  @ViewChild(DialogComponent) dialogComponent: DialogComponent;
  @Input() public ContentItem?: ContentItem | null;

  Comments: Comment[];
  Comment: Comment;

  private _captchaURL?: string | null;

  get CaptchaURL() {

    if (!this._captchaURL)
      this._captchaURL = this.blogService.CaptchaImageURL();

    return this._captchaURL;
  }

  public CaptchaCode?: string | null;

  constructor(private sessionService: SessionService, private blogService: BlogService) {
    this.Comments = new Array<Comment>();
    this.Comment = new Comment();
    this._captchaURL = null;
    this.dialogComponent = {} as DialogComponent;
  }

  ngOnChanges(changes: SimpleChanges) {
    const ci = changes['ContentItem'].currentValue as ContentItem;
    this.LoadComments(ci);
  }

  private LoadComments(ci: ContentItem) {

    if ((!ci) || ci.ID === 0)
      return;

    this.blogService.GetCommentsForContentItem(ci.ID).subscribe(x => {
      this.Comments = x;
    });
  }

  public SaveComment() {
    if (! this.Comment)
      return;

    this.Comment.Date = new Date();
    this.Comment.ContentItemID = this.ContentItem ?  this.ContentItem.ID : null;
    this.dialogComponent.showWaitDialog();

    this.blogService.SaveComment(this.Comment, this.CaptchaCode ?? "").subscribe((x: AsyncResult) => {
      this.dialogComponent.hideWaitDialog();
      this._captchaURL = null;

      if (x.ErrorMessage && x.ErrorMessage.length > 0)
        this.dialogComponent.showErrorMessage(x.ErrorMessage);
      else {
        this.dialogComponent.showInfoDialog("Your comment was saved successfully.");
        this.Comment.SenderName = "";
        this.Comment.SenderEMail = "";
        this.Comment.SenderWebsite = "";
        this.Comment.CommentText = "";
        this.CaptchaCode = null;

        if(this.ContentItem)
          this.LoadComments(this.ContentItem);
      }
    });
  }
}
