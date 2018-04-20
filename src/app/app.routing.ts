import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule',
  },
  {
    path: 'posts',
    loadChildren: 'app/posts/posts.module#PostsModule',
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
