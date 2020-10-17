import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRouteAccessService } from './user-route-access.service';


const routes: Routes = [
  {
    path: 'home',
    component: UserHomeComponent,
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'p1',
    component: UserFormComponent,
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'p2',
    component: UserListComponent,
    canActivate: [UserRouteAccessService]
  },
  {
    path: '',
    component: UserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
