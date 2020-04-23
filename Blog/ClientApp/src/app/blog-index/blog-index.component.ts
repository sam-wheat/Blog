import { Component, OnInit, OnDestroy, AfterContentInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from './../services/blogService';
import { SessionService } from './../services/sessionService';
import { ContentItem, SideNavMode } from '../model/model';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.css']
})
export class BlogIndexComponent implements OnInit, OnDestroy, AfterViewInit {
  siteSubscription: Subscription;
  groupIDFilterSubscription: Subscription;
  dateFilterSubscription: Subscription;
  ContentItems: ContentItem[];
  SelectedItem: ContentItem;
  ImageRoot: string;
  PostRoot: string;
  public IsRendered: number = 0;

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
    const currentDateFilter = this.sessionService.CurrentDateFilter;

    this.blogService.GetContentItems(currentSiteID, currentMenuID, currentGroupID, currentDateFilter)
      .subscribe((x: ContentItem[]) => {
        this.ContentItems = x;
      });
  }

  onClick(item: ContentItem) {
    this.sessionService.AnnounceSideNavMode(SideNavMode.Post);
    this.SelectedItem = item;
    this.router.navigate(['/post', item.Slug]);
  }

  ngAfterViewInit() {
    this.IsRendered = 1;
  }
}
