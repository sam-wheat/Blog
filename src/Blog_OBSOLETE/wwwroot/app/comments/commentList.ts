import { Component, Input, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BlogService} from './../services/BlogService';
import { SessionService} from './../services/SessionService';
import { ContentItem, Comment, AsyncResult } from '../model/model';
import { DialogComponent } from '../common/dialogComponent';

@Component({
    selector: 'blog-comment-list',
    templateUrl: './app/comments/commentList.html'
})
export class CommentList implements OnChanges {
    @ViewChild(DialogComponent) dialogComponent: DialogComponent;
    @Input() public ContentItem: ContentItem;
    
    Comments: Comment[];
    Comment: Comment;

    private _captchaURL: string;

    get CaptchaURL() {

        if (this._captchaURL === null)
            this._captchaURL = this.blogService.CaptchaImageURL();

        return this._captchaURL;
    }

    public CaptchaCode: string;

    constructor(private sessionService: SessionService, private blogService: BlogService) {
        this.Comments = new Array<Comment>();
        this.Comment = new Comment();
        this._captchaURL = null;
    }

    ngOnChanges(changes: SimpleChanges)
    {
        var ci = changes['ContentItem'].currentValue as ContentItem;
        this.LoadComments(ci);
    }

    private LoadComments(ci: ContentItem) {

        if (ci === null || typeof ci === 'undefined' || ci.ID === 0)
            return;

        this.blogService.GetCommentsForContentItem(ci.ID).subscribe(x => {
            this.Comments = x;
        });
    }

    private SaveComment() {

        if (this.Comment === null || typeof this.Comment === 'undefined')
            return;

        this.Comment.Date = new Date();

        if (this.ContentItem !== null && typeof this.ContentItem !== 'undefined')
            this.Comment.ContentItemID = this.ContentItem.ID;
        else
            this.Comment.ContentItemID = null;

        this.dialogComponent.showWaitDialog();

        this.blogService.SaveComment(this.Comment, this.CaptchaCode).subscribe((x: AsyncResult) => {
            this.dialogComponent.hideWaitDialog();
            this._captchaURL = null;

            if (x.ErrorMessage !== null && x.ErrorMessage.length > 0)
                this.dialogComponent.showErrorMessage(x.ErrorMessage);
            else {
                this.dialogComponent.showInfoDialog("Your comment was saved sucessfully.");
                this.Comment.SenderName = null;
                this.Comment.SenderEMail = null;
                this.Comment.SenderWebsite = null;
                this.Comment.CommentText = null;
                this.CaptchaCode = null;
                
                this.LoadComments(this.ContentItem);
            }
        });
    }
}