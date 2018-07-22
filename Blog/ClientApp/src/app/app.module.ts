import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DialogComponent } from './common/dialog/dialog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetail } from './blog-detail/blog-detail.component';
import { BlogIndex } from './blog-index/blog-index.component';
import { GroupFilter } from './group-filter/group-filter.component';
import { CommentList } from './comments/comments.component';
import { Contact } from './contact/contact.component';
import { Home } from './home/home.component';
import { NavBar } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    AboutComponent,
    BlogDetail,
    BlogIndex,
    GroupFilter,
    CommentList,
    Contact,
    Home,
    NavBar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
