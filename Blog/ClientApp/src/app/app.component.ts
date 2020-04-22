import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/sessionService';
import { BlogService } from './services/blogService';
import { Session } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private sessionService: SessionService, private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.GetActiveSites().subscribe(data => {

      const site = data.find(x => x.SiteName === "Sams Blog");

      if (site === null || site === undefined)
        throw new Error("Site Sams Blog was not found");

      this.sessionService.AnnounceSite(site);
      this.sessionService.siteAnnouncedSource.complete();
    });
  }
}
