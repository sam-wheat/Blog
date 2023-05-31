import { Injectable, EventEmitter } from '@angular/core';
import { Subject, AsyncSubject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Site } from '../model/model';
import { SideNavMode } from '../model/model';

@Injectable({ providedIn: 'root' })
export class SessionService {
  public ImageRoot: string;
  public PostRoot: string;
  public CurrentSite: Site;
  public CurrentMenuID: number;
  public CurrentGroupID: number;
  public CurrentDateFilter: Date | null;
  public CurrentSideNavMode: SideNavMode;
   

  public siteAnnouncedSource = new AsyncSubject<Site>();  // BehaviorSubject
  public siteAnnounced$ = this.siteAnnouncedSource.asObservable();

  private groupIDAnnouncedSource = new Subject<number>();
  public groupAnnounced$ = this.groupIDAnnouncedSource.asObservable();

  private menuIDAnnouncedSource = new Subject<number>();
  public menuIDAnnouncedSource$ = this.menuIDAnnouncedSource.asObservable();

  private dateFilterAnnouncedSource = new Subject<Date | null>();
  public dateFilterAnnouncedSource$ = this.dateFilterAnnouncedSource.asObservable();

  private sideNavModeAnnouncedSource = new BehaviorSubject<number>(SideNavMode.Site);
  public sideNavModeAnnouncedSource$ = this.sideNavModeAnnouncedSource.asObservable();

  constructor() {
    this.ImageRoot = "/assets/img/";
    this.PostRoot = "/articles/";
    this.CurrentSite = {} as Site;
    this.CurrentMenuID = -1;
    this.CurrentGroupID = -1;
    this.CurrentDateFilter = new Date('01/01/1901');
    this.CurrentSideNavMode = SideNavMode.Site;
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

  AnnounceDateFilter(dateFilter: Date | null) {

    if (this.CurrentDateFilter === dateFilter)
      return;

    this.CurrentDateFilter = dateFilter;
    this.dateFilterAnnouncedSource.next(dateFilter);
  }

  AnnounceSideNavMode(mode: SideNavMode) {

    if (this.CurrentSideNavMode === mode)
      return;

    this.CurrentSideNavMode = mode;
    this.sideNavModeAnnouncedSource.next(mode);
  }


  IsInitialized(): boolean {
    let isInitialized =
      this.CurrentSite &&
      this.CurrentGroupID !== -1 &&
      this.CurrentMenuID !== -1 &&
      (this.CurrentDateFilter?.getFullYear() !== 1901 ?? true);

    return isInitialized;
  }
}
