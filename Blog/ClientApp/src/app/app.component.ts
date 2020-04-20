import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BlogService } from './services/blogService';
import { Site } from './model/model';
import { SiteComponent } from './site/site.component';
import { SideNavComponent } from './sideNav/sideNav.component';

declare var initJS: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ClientApp';
  sites: Site[];

  constructor(private blogService: BlogService) {

  }

  ngOnInit() {
    this.blogService.GetActiveSites().subscribe(sites => {
      this.sites = sites;
      let cnt: number = sites.length;
    });
    
  }

  ngAfterViewInit() {

    initJS();
  }
}
