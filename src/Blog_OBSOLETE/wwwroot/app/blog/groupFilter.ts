import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SessionService } from '../services/SessionService';
import { BlogService } from '../services/BlogService';
import { KeyValuePair } from '../model/model';

@Component({
    selector: 'blog-group-filter',
    templateUrl: 'app/blog/groupFilter.html'
})
export class GroupFilter implements OnInit, OnDestroy {
    @Input() GroupColumn: string;
    private menuID: number;
    SelectedItem: KeyValuePair;
    Items: KeyValuePair[];
    menuIDSubscripton: Subscription;
    siteSubscription: Subscription;

    constructor(private blogService: BlogService, private sessionService: SessionService) {
        
    }

    ngOnInit()
    {
        this.siteSubscription = this.sessionService.siteAnnouncedSource.subscribe(x => {
            let blogIndex = x.Menus.find(x => x.MenuName === "BlogIndex");
            this.menuID = blogIndex.ID; 

            this.blogService.GetContentItemGroups(this.GroupColumn, this.menuID)
                .subscribe(groups => {
                    this.initializeGroupData(groups);  
                
                });
        });
    }

    initializeGroupData(groups:KeyValuePair[])
    {
        if (groups === null || groups.length === 0)
            return;

        let kvp = new KeyValuePair();

        if (this.sessionService.IsInitialized()) {

            if (this.GroupColumn === "GroupID")
                kvp.Key = (this.sessionService.CurrentGroupID + 0 === this.sessionService.CurrentGroupID) ? this.sessionService.CurrentGroupID + '' : null;
            else if (this.GroupColumn === "PubDate")
                kvp.Key = this.blogService.DateToString(this.sessionService.CurrentDateFilter);
            else
                throw ("groupFilter.GroupColumn has an unexpected value: " + this.GroupColumn);
        }
        else
            kvp = groups[0];

        this.onChangeGroup(kvp);
        this.Items = groups;
    }

    onChangeGroup(item: KeyValuePair) {
        this.SelectedItem = item;

        if (this.GroupColumn === "GroupID")
        {
            this.sessionService.AnnounceGroupID(item.Key === null ? null : +item.Key);
        }
        else if (this.GroupColumn === "PubDate")
        {
            let newDate = new Date(item.Key); 

            if (item.Key === null)
                newDate = null;
            else
                newDate = new Date(newDate.getUTCFullYear(), newDate.getUTCMonth(), newDate.getUTCDate());

            this.sessionService.AnnounceDateFilter(newDate);
        }
        else
            throw new Error("GroupColumn not recognized: " + this.GroupColumn);

    }

    isActive(itemID: string)
    {
        return this.SelectedItem.Key === itemID;
    }

    ngOnDestroy() {
        this.siteSubscription.unsubscribe();
    }
}
