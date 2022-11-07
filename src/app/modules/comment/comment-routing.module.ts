import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "./componenets/comments/comments.component";
import {CommentDetailComponent} from "./componenets/comment-detail/comment-detail.component";
import {CommentsResolver} from "./services/resolver/comments.resolver";

const routes: Routes = [
  {
    path: '', component: CommentsComponent, resolve: {comments: CommentsResolver}, children: [
      {path: ':id', component: CommentDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
