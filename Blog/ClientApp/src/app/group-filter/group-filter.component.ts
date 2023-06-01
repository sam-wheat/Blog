import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService } from '../services/sessionService';
import { BlogService } from '../services/blogService';
import { KeyValuePair, Menu } from '../model/model';

@Component({
  selector: 'app-group-filter',
  templateUrl: './group-filter.component.html',
  styleUrls: ['./group-filter.component.css']
})
export class GroupFilterComponent implements OnInit, OnDestroy {
  @Input() GroupColumn: string;
  private menuID: number;
  SelectedItem?: KeyValuePair;
  Items: KeyValuePair[];
  menuIDSubscripton: Subscription;
  siteSubscription: Subscription;

  constructor(private blogService: BlogService, private sessionService: SessionService) {
    this.GroupColumn = "";
    this.menuID = 0;
    this.Items = new Array<KeyValuePair>();
    this.menuIDSubscripton = Subscription.EMPTY;
    this.siteSubscription = Subscription.EMPTY;
  }

  ngOnInit() {

    this.siteSubscription = this.sessionService.siteAnnouncedSource.subscribe(x => {
      var blogIndex : Menu | null = x.Menus?.find(x => x.MenuName === "BlogIndex") as Menu;
      this.menuID = blogIndex.ID;

      this.blogService.GetContentItemGroups(this.GroupColumn, this.menuID)
        .subscribe(groups => {
          this.initializeGroupData(groups);
        });
    });
  }

  initializeGroupData(groups: KeyValuePair[]) {
    
    if (!groups)
      return;

    let kvp = new KeyValuePair();

    if (this.sessionService.IsInitialized()) {

      if (this.GroupColumn === "GroupID")
        kvp.Key = (this.sessionService.CurrentGroupID + 0 === this.sessionService.CurrentGroupID) ? this.sessionService.CurrentGroupID + '' : "";
      else if (this.GroupColumn === "PubDate")
        kvp.Key = this.blogService.DateToString(this.sessionService.CurrentDateFilter) ?? "" ;
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
    var newDate : Date | null;

    if (this.GroupColumn === "GroupID") {
      this.sessionService.AnnounceGroupID(item.Key === null ? 0 : +item.Key);
    }
    else if (this.GroupColumn === "PubDate") {

      if ((!item.Key) || item.Key === '')
        newDate = null;
      else
      {
        newDate = new Date(item.Key);
        newDate = new Date(newDate.getUTCFullYear(), newDate.getUTCMonth(), newDate.getUTCDate());
      }

      this.sessionService.AnnounceDateFilter(newDate);
    }
    else
      throw new Error("GroupColumn not recognized: " + this.GroupColumn);

  }

  isActive(itemID: string) : boolean {
    return this.SelectedItem?.Key === itemID ?? false;
  }

  ngOnDestroy() {
    this.siteSubscription.unsubscribe();
  }
}
