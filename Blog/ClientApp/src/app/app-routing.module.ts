import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { SideNavComponent } from './side-nav/side-nav.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blogIndex', component: BlogIndexComponent },
  { path: 'sideNav', component: SideNavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
