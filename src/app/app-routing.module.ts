import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminApprovalComponent } from './components/admin-approval/admin-approval.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:"",component: AdminLoginComponent},
  {path:'admin-approval', component: AdminApprovalComponent},
  {path:'', component: AdminDashboardComponent,pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
