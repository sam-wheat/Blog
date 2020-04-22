import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from './../services/blogService';
import { SessionService } from './../services/sessionService';
import { ContentItem } from '../model/model';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.css']
})
export class BlogIndexComponent implements OnInit, OnDestroy {
  siteSubscription: Subscription;
  groupIDFilterSubscription: Subscription;
  dateFilterSubscription: Subscription;
  ContentItems: ContentItem[];
  SelectedItem: ContentItem;
  ImageRoot: string;
  PostRoot: string;

  constructor(private router: Router, private blogService: BlogService, private sessionService: SessionService) {
    this.ImageRoot = sessionService.ImageRoot;
    this.PostRoot = sessionService.PostRoot;
    this.ContentItems = [];
  }

  ngOnInit(): void {

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
    // Make sure all parameters and filters have been initialized so we don't query multiple times

    if (this.sessionService.IsInitialized() === false)
      return;

    const currentSiteID = this.sessionService.CurrentSite.ID;
    const blogIndex = this.sessionService.CurrentSite.Menus.find(x => x.MenuName === "BlogIndex");
    const currentMenuID = blogIndex.ID
    const currentGroupID = this.sessionService.CurrentGroupID;

    this.blogService.GetContentItems(currentSiteID, currentMenuID, currentGroupID, this.sessionService.CurrentDateFilter)
      .subscribe((x: ContentItem[]) => {
        this.ContentItems = x;
      });
  }

  onClick(item: ContentItem) {
    this.SelectedItem = item;
    this.router.navigate(['/Post', item.Slug]);
  }
}
