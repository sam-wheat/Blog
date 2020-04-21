import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/sessionService';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(public sessionService: SessionService) {
    
  }

  ngOnInit(): void {
  }

  toggleBlogMode(): void {
    const blogMode: number = this.sessionService.CurrentBlogMode === 0 ? 1 : 0;
    this.sessionService.AnnounceBlogMode(blogMode);
  }

}
