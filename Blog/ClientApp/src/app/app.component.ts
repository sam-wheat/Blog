import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NavBar } from './navbar/navbar.component';
import { Contact } from './contact/contact.component';
import { BlogIndex } from './blog-index/blog-index.component';
import { BlogDetail } from './blog-detail/blog-detail.component';
import { Home } from './home/home.component';
import { BlogService } from './services/BlogService';
import { SessionService } from './services/SessionService';
import { Site } from './model/model';
import { DialogComponent } from './common/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  private currentGroupID: number;
  private currentDate: Date;
  @ViewChild(DialogComponent) dialogComponent: DialogComponent;

  constructor(private blogService: BlogService, private sessionService: SessionService) {
    
  }

  ngOnInit() {
    this.SetCurrentSite();
  }

  ngAfterViewInit() {
    
  }

  SetCurrentSite() {
    this.dialogComponent.showWaitDialog();
    this.blogService.GetActiveSites().subscribe(data => {
      
      let site = data.find(x => x.SiteName === "Sams Blog");

      if (site === null || site === undefined)
        throw new Error("Site Sams Blog was not found");

      this.sessionService.AnnounceSite(site);
      this.sessionService.siteAnnouncedSource.complete();
      this.dialogComponent.hideWaitDialog();
    });
  }

  SetNavBarMenuID() {

  }
}
