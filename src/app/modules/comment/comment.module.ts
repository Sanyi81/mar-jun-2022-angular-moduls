import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './componenets/comment/comment.component';
import { CommentsComponent } from './componenets/comments/comments.component';
import { CommentDetailComponent } from './componenets/comment-detail/comment-detail.component';
import {RouterModule} from "@angular/router";
import {CommentService} from "./services";


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    RouterModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule { }
