import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService } from '../services/sessionService';
import { Menu } from '../model/model';
import { MenuContentItem } from '../model/model';
import { Router } from '@angular/router';
import { SideNavMode } from '../model/model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedMenuItem: MenuContentItem;
  mainMenu: Menu;


  constructor(public sessionService: SessionService, private router: Router) {
    
  }

  ngOnInit(): void {

    this.mainMenu = new Menu();
    this.mainMenu.MenuContentItems = [];

    this.subscription = this.sessionService.siteAnnouncedSource.subscribe(s => {

      if (s === null)
        return;

      let navBar = s.Menus.find(x => x.MenuName === "NavBar");

      if (navBar !== null && navBar !== undefined) {
        this.mainMenu = navBar;
        this.sessionService.AnnounceMenuID(navBar.ID);
      }
    });
  }

  onClick(menuItem: MenuContentItem) {
    this.selectedMenuItem = menuItem;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isActive(menuItem: string) {
    let result = false;

    if (menuItem === null)
      return result;

    if (menuItem.startsWith("/BlogIndex") && this.router.url.startsWith("/Post"))
      result = true;
    else
      result = menuItem === this.router.url;

    return result;

  }

  toggleSideNavMode(mode: SideNavMode): void {
    this.router.navigateByUrl('//blogIndex');
    this.sessionService.AnnounceSideNavMode(mode);
  }


  scroll(targetID: string) {
    document.querySelector('#' + targetID).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
}
