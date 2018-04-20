import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { PostsRoutingModule } from './posts.routing';
import { PostsComponent } from './posts.component';
import { PostsService } from './service/posts.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    NgxDatatableModule,
    PostsRoutingModule,
    FormsModule
  ],
  declarations: [
    PostsComponent,
    CreatePostComponent,
    UpdatePostComponent
  ],
  providers: [PostsService]
})
export class PostsModule { }
