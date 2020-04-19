import { Component, OnInit } from '@angular/core';

declare var initJS: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  constructor() {
    
    
    let x: number = 1;
    x = x + 1;
    //alert(x);
  

  }

  ngOnInit() {

    initJS();
  }
}
