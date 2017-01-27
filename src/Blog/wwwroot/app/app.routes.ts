import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { BlogIndex } from './blog/blogIndex';
import { BlogDetail } from './blog/blogDetail';
import { Home } from './home/home';
// When adding a route, also add rewrite rule in web.config
const routes: Routes = [
    { path: '', component: Home },
    { path: 'About', component: About },
    { path: 'Contact', component: Contact },
    { path: 'BlogIndex', component: BlogIndex },
    { path: 'Post/:slug', component: BlogDetail }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);