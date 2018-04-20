import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent }     from './posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'create',
    component: CreatePostComponent
  },
  {
    path: 'update/:id',
    component: UpdatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }