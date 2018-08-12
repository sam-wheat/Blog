import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { BlogService } from './../services/BlogService';
import { SessionService } from './../services/SessionService';
import { ContentItem } from '../model/model';
import { CommentList } from '../comments/comments.component';
import { DialogComponent } from '../common/dialog/dialog.component';

declare var hljs: any;
declare var highlight: any; // in site.js
//declare var jQuery: any;


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetail implements OnInit, OnDestroy, AfterViewInit {
  PostRoot = this.sessionService.PostRoot;
  Post: ContentItem;
  private Content: string;
  private sub: Subscription;
  private articleRoot = "/articles/";
  siteSubscription: Subscription;
  @ViewChild('contentContainer') contentContainer2: ElementRef; // workaround
  @ViewChild(DialogComponent) dialogComponent: DialogComponent;

  get ArticleURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.articleRoot + this.Post.URL);
  }

  constructor(private sessionService: SessionService, private blogService: BlogService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private el: ElementRef) {
    this.Post = new ContentItem();
    this.Post.ID = 0;  // must initialize property or it will not be created on object
  }

  ngOnInit() {
    this.dialogComponent.showWaitDialog();
    this.sub = this.route.params.subscribe(params => {
      let slug = params['slug'];
      this.getContentItem(slug);
    });

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    if (this.sub != null)
      this.sub.unsubscribe();
    this.siteSubscription.unsubscribe();
  }

  private getContentItem(slug: string) {
    if (slug === null || typeof slug === 'undefined')
      return;

    this.siteSubscription = this.sessionService.siteAnnouncedSource.subscribe(site => {
      this.blogService.GetContentItemBySlug(slug, site.ID).subscribe(x => {
        this.Post = x;

        this.blogService.GetPostHtml(this.sessionService.PostRoot + this.Post.URL).subscribe((h: string) => {
          // this is correct but does not work due to bug
          //this.Content = this.sanitizer.bypassSecurityTrustHtml(h);


          // workaround http://stackoverflow.com/questions/31548311/angular-2-html-binding
          this.contentContainer2.nativeElement.innerHTML = h;
          //jQuery("#contentContainer").html(h).promise().done(function () { highlight(hljs); });
          // end workaround


          highlight(hljs); // exists in js/site.js

          this.dialogComponent.hideWaitDialog();
        });
      });
    });
  }
}

