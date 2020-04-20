import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { HttpErrorHandler } from './services/HttpErrorHandler';
import { MessageService } from './services/MessageService';
import { SiteComponent } from './site/site.component';
import { SideNavComponent } from './sideNav/sidenav.component';         

@NgModule({
  declarations: [
    AppComponent,
    BlogIndexComponent,
    SiteComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
