import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NavBar } from './nav/navbar';
import { Contact } from './contact/contact';
import { BlogIndex } from './blog/blogIndex';
import { BlogDetail } from './blog/blogDetail';
import { Home } from './home/home';
import { BlogService } from './services/BlogService';
import { SessionService } from './services/SessionService';
import { Site } from './model/model';
import { DialogComponent } from './common/dialogComponent';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.html',
    providers: [BlogService, SessionService]
})

export class AppComponent implements OnInit, AfterViewInit {

    private currentGroupID: number;
    private currentDate: Date;
    @ViewChild(DialogComponent) dialogComponent: DialogComponent;

    constructor(private blogService: BlogService, private sessionService: SessionService) {

    }

    ngOnInit()
    {
        
    }

    ngAfterViewInit()
    {
        
        this.SetCurrentSite();
        
    }

    SetCurrentSite()
    {
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

    SetNavBarMenuID()
    {

    }
}