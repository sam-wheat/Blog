import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BlogService } from '../services/blogService';
import { Site, SideNavMode } from '../model/model';
import { SessionService } from '../services/sessionService';
import { faCoffee, faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
  faCoffee = faCoffee;
  faBars = faBars;
  faArrowUp = faArrowUp;

  constructor(
    private blogService: BlogService,
    public sessionService: SessionService) {
    this.ImageRoot = sessionService.ImageRoot;
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
