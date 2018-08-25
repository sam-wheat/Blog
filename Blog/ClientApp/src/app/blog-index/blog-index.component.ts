import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { BlogService } from './../services/BlogService';
import { SessionService } from './../services/SessionService';
import { Site } from '../model/model';
import { Menu } from '../model/model';
import { MenuContentItem } from '../model/model';
import { ContentItem } from '../model/model';
import { GroupFilter } from '../group-filter/group-filter.component';
import { DialogComponent } from '../common/dialog/dialog.component';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.css']
})

export class BlogIndex implements OnInit, OnDestroy {
  siteSubscription: Subscription;
  groupIDFilterSubscription: Subscription;
  dateFilterSubscription: Subscription;
  ContentItems: ContentItem[];
  ContentItem: ContentItem;
  ImageRoot: string;
  PostRoot: string;
  ShowDetail: boolean;
  @ViewChild(DialogComponent) dialogComponent: DialogComponent;

  constructor(private router: Router, private blogService: BlogService, private sessionService: SessionService) {
    this.ImageRoot = sessionService.ImageRoot;
    this.PostRoot = sessionService.PostRoot;
    this.ContentItems = [];
  }

  ngOnInit() {

    this.siteSubscription = this.sessionService.siteAnnounced$.subscribe(x => {
      this.updateIndex();
    });

    this.groupIDFilterSubscription = this.sessionService.groupAnnounced$.subscribe(x => {
      this.updateIndex();
    });

    this.dateFilterSubscription = this.sessionService.dateFilterAnnouncedSource$.subscribe(x => {
      this.updateIndex();
    });
  }

  ngOnDestroy() {
    this.siteSubscription.unsubscribe();
    this.groupIDFilterSubscription.unsubscribe();
    this.dateFilterSubscription.unsubscribe();
  }

  updateIndex() {
    // Make sure all parameters and filters have been initialized so we dont query multiple times

    if (this.sessionService.IsInitialized() === false)
      return;

    this.dialogComponent.showWaitDialog();
    let currentSiteID = this.sessionService.CurrentSite.ID;
    let blogIndex = this.sessionService.CurrentSite.Menus.find(x => x.MenuName === "BlogIndex");
    let currentMenuID = blogIndex.ID
    let currentGroupID = this.sessionService.CurrentGroupID;

    this.blogService.GetContentItems(currentSiteID, currentMenuID, currentGroupID, this.sessionService.CurrentDateFilter)
      .subscribe((x: ContentItem[]) => {
        this.dialogComponent.hideWaitDialog();
        this.ContentItems = x;
      });
  }

  onClick(item: ContentItem) {
    this.router.navigate(['/Post', item.Slug]);
  }
}
