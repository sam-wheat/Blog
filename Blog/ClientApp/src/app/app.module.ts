import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { HttpErrorHandler } from './services/http-error-handler';
import { MessageService } from './services/MessageService';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { GroupFilterComponent } from './group-filter/group-filter.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlogIndexComponent,
    SideNavComponent,
    HomeComponent,
    GroupFilterComponent,
    BlogDetailComponent,
    CommentsComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
