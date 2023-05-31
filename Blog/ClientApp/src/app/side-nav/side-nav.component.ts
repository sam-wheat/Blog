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
  selectedMenuItem?: MenuContentItem | null;
  mainMenu: Menu;


  constructor(public sessionService: SessionService, private router: Router) {
    this.subscription = Subscription.EMPTY;
    this.mainMenu = new Menu();
    this.mainMenu.MenuContentItems = [];
  }

  ngOnInit(): void {

    

    this.subscription = this.sessionService.siteAnnouncedSource.subscribe(s => {

      if (!s)
        return;

      let navBar = s.Menus?.find(x => x.MenuName === "NavBar");

      if (navBar) {
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

    if (!menuItem )
      return result;

    if (menuItem.startsWith("/BlogIndex") && this.router.url.startsWith("/Post"))
      result = true;
    else
      result = menuItem === this.router.url;

    return result;
  }

  toggleSideNavMode(mode: SideNavMode): void {
    this.router.navigateByUrl('//blogIndex');
  }


  scroll(targetID: string) {
      document.querySelector('#' + targetID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
}
