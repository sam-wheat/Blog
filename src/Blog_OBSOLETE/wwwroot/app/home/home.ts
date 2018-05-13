import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from '../services/SessionService';
import { Subscription } from 'rxjs/Subscription';
import { ContentItem } from '../model/model';
import { BlogService} from './../services/BlogService';
declare var runAnimation: any;
declare var jQuery: any;

@Component({
    templateUrl: 'app/home/home.html'
})
export class Home implements OnInit, OnDestroy {
    public pageTitle: string = 'Welcome';
    


    constructor(private sessionService: SessionService, private blogService: BlogService)
    {
  
    }

    ngOnInit()
    {
        runAnimation(jQuery);
    }

    ngOnDestroy()
    {

    }

    public onChangeGroup()
    {

    }
}
