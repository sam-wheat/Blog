import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from '../services/blogService';
import { Site } from '../model/model';
import { SessionService } from '../services/sessionService';
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';

declare var initJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit  {
  sites: Site[];
  blogModeSubscription: Subscription;
  blogMode: number;
  faCoffee = faCoffee;
  faBars = faBars;

  constructor(
    private blogService: BlogService,
    public sessionService: SessionService) {

  }

  ngOnInit(): void {
    this.blogService.GetActiveSites()
      .subscribe(sites => this.sites = sites);

    this.blogModeSubscription = this.sessionService.blogModeAnnouncedSource$
      .subscribe(x => {


      });

    this.sessionService.AnnounceBlogMode(0);
  }

  ngOnDestroy() {
    this.blogModeSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    initJS();
  }
}
