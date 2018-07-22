import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionService } from '../services/SessionService';
import { Site } from '../model/model';
import { Menu } from '../model/model';
import { MenuContentItem } from '../model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBar implements OnInit, OnDestroy {
  subscription: Subscription;
  mainMenu: Menu;
  selectedMenuItem: MenuContentItem;
  router: Router;

  constructor(private sessionService: SessionService, _router: Router) {
    this.router = _router;
  }

  public ngOnInit() {
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
}
