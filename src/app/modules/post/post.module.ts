import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {PostRoutingModule} from "./post-routing.module";
import {PostComponent} from "./components/post/post.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";
import {PostService} from "./services";


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    RouterModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
