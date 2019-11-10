import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [{
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'activity',
    component: ActivityComponent,
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]  
})
export class UserRoutingModule { }

export const routedComponents = [
  UserComponent,
  LoginComponent,
  ProfileComponent,
  ActivityComponent
];
