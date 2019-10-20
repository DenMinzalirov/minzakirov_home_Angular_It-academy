import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {LogFormComponent} from './components/log-form/log-form.component';
// import {AuthGuard} from "./guards/auth.guard";

// canActivate: [ AuthGuard, RegistrationGuard]

const routes: Routes = [
  { path: '', component: LogFormComponent},
  { path: 'login', component: LoginComponent},
  // { path: 'client/add', component: AddClientComponent, canActivate: [AuthGuard]},
  // { path: 'client/edit/:id', component: EditClientComponent, canActivate: [AuthGuard]},
  // { path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard]},
  // { path: '', component: },
  // { path: '', component: },
  // { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
