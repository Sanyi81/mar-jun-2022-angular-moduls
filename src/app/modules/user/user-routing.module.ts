import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {UsersResolver} from "./services/resolver/users.resolver";
import {UserResolver} from "./services/resolver/user.resolver";

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {users: UsersResolver}, children: [
      {path: ':id', component: UserDetailComponent, resolve: {user: UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
