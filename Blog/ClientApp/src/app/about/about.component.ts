import { Component, OnInit } from '@angular/core';
declare var initJS: any;
declare var jQuery: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [':host { display:flex;flex-flow:column;min-height:100%; }']
})
export class AboutComponent implements OnInit {
  public componentState: string;

  constructor() {
  }

  ngOnInit() {
    initJS(jQuery);
  }

  private ToggleAnimation() {
    this.componentState = this.componentState === 'inactive' ? 'active' : 'inactive';
  }
}
