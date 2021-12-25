import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { BlogService } from './../services/blogService';
import { SessionService } from './../services/sessionService';
import { ContentItem } from '../model/model';
import { CommentsComponent } from '../comments/comments.component';

declare var hljs: any;
declare var highlight: any; // in site.js

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  PostRoot = this.sessionService.PostRoot;
  Post: ContentItem;
  private Content: string;
  private sub: Subscription;
  private articleRoot = "/articles/";
  siteSubscription: Subscription;
  IsRendered: number = 0;
  @ViewChild('contentContainer') contentContainer2: ElementRef; // workaround

  get ArticleURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.articleRoot + this.Post.URL);
  }

  constructor(private sessionService: SessionService, private blogService: BlogService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private el: ElementRef) {
    this.Post = new ContentItem();
    this.Post.ID = 0;  // must initialize property or it will not be created on object
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let slug = params['slug'];
      this.getContentItem(slug);
    });
  }

  ngAfterViewInit() {
    
  }

  ngOnDestroy() {
    
    if (this.sub)
      this.sub.unsubscribe();
    
      this.siteSubscription.unsubscribe();
  }

  private getContentItem(slug: string) {
    if (!slug)
      return;

    this.siteSubscription = this.sessionService.siteAnnouncedSource.subscribe(site => {
      this.blogService.GetContentItemBySlug(slug, site.ID).subscribe(x => {
        this.Post = x;

        this.blogService.GetPostHtml(this.sessionService.PostRoot + this.Post.URL).subscribe((h: string) => {
          // this is correct but does not work due to bug
          // this.Content = this.sanitizer.bypassSecurityTrustHtml(h);


          // workaround http://stackoverflow.com/questions/31548311/angular-2-html-binding
          this.contentContainer2.nativeElement.innerHTML = h;
          //jQuery("#contentContainer").html(h).promise().done(function () { highlight(hljs); });
          // end workaround


          highlight(hljs); // exists in js/site.js
          this.IsRendered = 1;

        });
      });
    });
  }
}

