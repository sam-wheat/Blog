import { Component, OnInit, OnDestroy, trigger, state, style, transition, animate } from '@angular/core';
declare var initJS: any;
declare var jQuery: any;

@Component({
    selector: 'blog-about',
    templateUrl: './app/about/about.html',
    styles: [':host { display:flex;flex-flow:column;height:100%; }']
    //,animations: [
    //    trigger('heroState', [
    //        state('active', style({
    //            backgroundColor: 'red'
    //        })),
    //        state('inactive', style({
    //            backgroundColor: 'blue'
    //        })),
    //        transition('active => inactive', animate('200ms ease-in')),
    //        transition('inactive => active', animate('200ms ease-out'))
    //    ])
    //]
})
export class About implements OnInit, OnDestroy {
    public componentState: string;
    
    constructor() {
    }

    ngOnInit()
    {
        initJS(jQuery);   
    }

    ngOnDestroy()
    {

    }

    private ToggleAnimation()
    {
        this.componentState = this.componentState === 'inactive' ? 'active' : 'inactive';
    }
}