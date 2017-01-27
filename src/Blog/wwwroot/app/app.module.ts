import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppComponent } from './app.component';
import { SessionService } from './services/SessionService';
import { BlogService } from './services/BlogService';
import { routing, appRoutingProviders } from './app.routes';
import { BlogDetail } from './blog/blogDetail';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { BlogIndex } from './blog/blogIndex';
import { CommentList } from './comments/commentList';
import { Home } from './home/home';
import { GroupFilter } from './blog/groupFilter';
import { DialogComponent } from './common/dialogComponent';
import { NavBar } from './nav/navbar';
import { AppConfig } from './app.config';
require('../js/site.js');
// workaround https://github.com/angular/angular/issues/11219
import { Directive } from '@angular/core';
@Directive({ selector: 'time' })
export class TimeDirective { }
// end workaround

const routes: Routes = [];


@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        routing,
        RouterModule.forRoot(routes, { useHash: false })
    ],

    declarations: [
        BlogDetail,
        AppComponent,
        About,
        Contact,
        BlogIndex,
        Home,
        GroupFilter,
        DialogComponent,
        NavBar,
        CommentList,
        TimeDirective //workaround
    ],

    providers: [
        appRoutingProviders,
        SessionService,
        BlogService,
        AppConfig
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }