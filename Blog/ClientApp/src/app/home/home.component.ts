import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BlogService } from '../services/blogService';
import { Site, SideNavMode } from '../model/model';
import { SessionService } from '../services/sessionService';

declare var initJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {
  sites: Site[];
  blogMode: number;
  ImageRoot: string;
  IsRendered: number = 0;

  constructor(
    private blogService: BlogService,
    public sessionService: SessionService) {
          this.ImageRoot = sessionService.ImageRoot;
          this.sites = new Array<Site>();
          this.blogMode = 0;

  }

  ngOnInit(): void {
    this.blogService.GetActiveSites()
      .subscribe(sites => this.sites = sites);

    this.sessionService.AnnounceSideNavMode(SideNavMode.Site);
  }

  ngAfterContentInit() {
    this.IsRendered = 1;
  }
}
