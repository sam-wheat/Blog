import { Injectable, EventEmitter } from '@angular/core';
import { Subject, AsyncSubject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Site } from '../model/model';

@Injectable({ providedIn: 'root' })
export class SessionService {
  public ImageRoot: string;
  public PostRoot: string;
  public CurrentSite: Site;
  public CurrentMenuID: number;
  public CurrentGroupID: number;
  public CurrentDateFilter: Date;
  public CurrentBlogMode: number;
   

  public siteAnnouncedSource = new AsyncSubject<Site>();  // BehaviorSubject
  public siteAnnounced$ = this.siteAnnouncedSource.asObservable();

  private groupIDAnnouncedSource = new Subject<number>();
  public groupAnnounced$ = this.groupIDAnnouncedSource.asObservable();

  private menuIDAnnouncedSource = new Subject<number>();
  public menuIDAnnouncedSource$ = this.menuIDAnnouncedSource.asObservable();

  private dateFilterAnnouncedSource = new Subject<Date>();
  public dateFilterAnnouncedSource$ = this.dateFilterAnnouncedSource.asObservable();

  private blogModeAnnouncedSource = new BehaviorSubject<number>(0);
  public blogModeAnnouncedSource$ = this.blogModeAnnouncedSource.asObservable();

  constructor() {
    this.ImageRoot = "/assets/images/";
    this.PostRoot = "/articles/";
    this.CurrentSite = null;
    this.CurrentMenuID = 0;
    this.CurrentGroupID = 0;
    this.CurrentDateFilter = new Date('01/01/1901');
    this.CurrentBlogMode = 0
  }

  AnnounceSite(site: Site) {
    this.CurrentSite = site;
    this.siteAnnouncedSource.next(this.CurrentSite);
  }

  AnnounceGroupID(groupID: number) {

    if (this.CurrentGroupID === groupID)
      return;

    this.CurrentGroupID = groupID;
    this.groupIDAnnouncedSource.next(groupID);
  }

  AnnounceMenuID(menuID: number) {

    if (this.CurrentMenuID === menuID)
      return;

    this.CurrentMenuID = menuID;
    this.groupIDAnnouncedSource.next(menuID);
  }

  AnnounceDateFilter(dateFilter: Date) {

    if (this.CurrentDateFilter === dateFilter)
      return;

    this.CurrentDateFilter = dateFilter;
    this.dateFilterAnnouncedSource.next(dateFilter);
  }

  AnnounceBlogMode(mode: number) {

    if (this.CurrentBlogMode === mode)
      return;

    this.CurrentBlogMode = mode;
    this.blogModeAnnouncedSource.next(mode);
  }


  IsInitialized(): boolean {
    let isInitialized =
      this.CurrentSite !== null &&
      this.CurrentGroupID !== 0 &&
      this.CurrentMenuID !== 0 &&
      ((this.CurrentDateFilter !== null && this.CurrentDateFilter.getFullYear() !== 1901) || this.CurrentDateFilter === null);

    return isInitialized;
  }
}
