import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Observable } from 'rxjs/Observable';
import { Site } from '../model/model';

@Injectable()
export class SessionService
{
    public ImageRoot: string;
    public PostRoot: string;
    public CurrentSite: Site;
    public CurrentMenuID: number;
    public CurrentGroupID: number;
    public CurrentDateFilter: Date;   

    public siteAnnouncedSource = new AsyncSubject<Site>();  // BehaviorSubject
    public siteAnnounced$ = this.siteAnnouncedSource.asObservable();
    
    private groupIDAnnouncedSource = new Subject<number>();
    public groupAnnounced$ = this.groupIDAnnouncedSource.asObservable();

    private menuIDAnnouncedSource = new Subject<number>();
    public menuIDAnnouncedSource$ = this.menuIDAnnouncedSource.asObservable();

    private dateFilterAnnouncedSource = new Subject<Date>();
    public dateFilterAnnouncedSource$ = this.dateFilterAnnouncedSource.asObservable();


    constructor()
    {
        this.ImageRoot = "/images/";
        this.PostRoot = "/articles/";
        this.CurrentSite = null;
        this.CurrentMenuID = 0;
        this.CurrentGroupID = 0;
        this.CurrentDateFilter = new Date('01/01/1901');
    }

    AnnounceSite(site: Site)
    {
        this.CurrentSite = site;
        this.siteAnnouncedSource.next(this.CurrentSite);
        this.siteAnnounced$
    }

    AnnounceGroupID(groupID: number)
    {
        this.CurrentGroupID = groupID;
        this.groupIDAnnouncedSource.next(this.CurrentGroupID);
    }

    AnnounceMenuID(menuID: number)
    {
        this.CurrentMenuID = menuID;
        this.groupIDAnnouncedSource.next(this.CurrentMenuID);
    }

    AnnounceDateFilter(dateFilter: Date)
    {
        this.CurrentDateFilter = dateFilter;
        this.dateFilterAnnouncedSource.next(this.CurrentDateFilter);
    }

    IsInitialized(): boolean
    {
        let isInitialized =
            this.CurrentSite !== null &&
            this.CurrentGroupID !== 0 &&
            this.CurrentMenuID !== 0 &&
            ((this.CurrentDateFilter !== null && this.CurrentDateFilter.getFullYear() !== 1901) || this.CurrentDateFilter === null);

        return isInitialized;
    }
}