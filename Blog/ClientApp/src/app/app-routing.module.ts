import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Contact } from './contact/contact.component';
import { BlogIndex } from './blog-index/blog-index.component';
import { BlogDetail } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: Contact },
  { path: 'BlogIndex', component: BlogIndex },
  { path: 'Post/:slug', component: BlogDetail }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
