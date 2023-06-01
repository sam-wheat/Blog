import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timeout } from 'rxjs';
import { BlogService } from './../services/blogService';
import { SessionService } from './../services/sessionService';
import { ContentItem, SideNavMode } from '../model/model';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.css']
})
export class BlogIndexComponent implements OnInit, OnDestroy {
  @ViewChild(DialogComponent, {static: true}) dialogComponent?: DialogComponent | null;
  siteSubscription: Subscription;
  groupIDFilterSubscription: Subscription;
  dateFilterSubscription: Subscription;
  ContentItems: ContentItem[] | null;
  SelectedItem: ContentItem;
  ImageRoot: string;
  PostRoot: string;
  

  constructor(private router: Router, private blogService: BlogService, private sessionService: SessionService) {
    this.ImageRoot = sessionService.ImageRoot;
    this.PostRoot = sessionService.PostRoot;
    this.ContentItems = null;
    this.siteSubscription = Subscription.EMPTY;
    this.groupIDFilterSubscription = Subscription.EMPTY;
    this.dateFilterSubscription = Subscription.EMPTY;
    this.SelectedItem = new ContentItem();
  }

  ngOnInit(): void {

    this.sessionService.AnnounceSideNavMode(SideNavMode.PostIndex);
    
    this.siteSubscription = this.sessionService.siteAnnouncedSource.subscribe(x => {
      this.updateIndex();
    });

    this.groupIDFilterSubscription = this.sessionService.groupIDAnnouncedSource.subscribe(x => {
      this.updateIndex();
    });

    this.dateFilterSubscription = this.sessionService.dateFilterAnnouncedSource.subscribe(x => {
      this.updateIndex();
    });
  }


  ngOnDestroy() {
    this.siteSubscription.unsubscribe();
    this.groupIDFilterSubscription.unsubscribe();
    this.dateFilterSubscription.unsubscribe();
  }


  updateIndex() {
    // Make sure all parameters and filters have been initialized so we don't query multiple times

    if (! this.sessionService.IsInitialized())
      return;

    const currentSiteID = this.sessionService.CurrentSite.ID;
    const blogIndex = this.sessionService.CurrentSite?.Menus?.find(x => x.MenuName === "BlogIndex") ?? (() => {throw new Error("BlogIndex was not found.");})();
    const currentMenuID = blogIndex.ID
    const currentGroupID = this.sessionService.CurrentGroupID;
    const currentDateFilter = this.sessionService.CurrentDateFilter;
    const delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));
    this.ContentItems = null;
    
    this.dialogComponent?.showWaitDialog();

    this.blogService.GetContentItems(currentSiteID, currentMenuID, currentGroupID, currentDateFilter)
      .subscribe(async (posts: ContentItem[]) => {
        await delay(500);  // prevent flashing
        this.ContentItems = posts;
        this.dialogComponent?.hideWaitDialog();
      });
  }

  onClick(item: ContentItem) {
    
    this.SelectedItem = item;
    this.router.navigate(['/post', item.Slug]);
  }
}
