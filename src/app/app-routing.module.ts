import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccStatusComponent } from './components/acc-status/acc-status.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { TestComponent } from './components/test/test.component';
import { UnlockAccountComponent } from './components/unlock-account/unlock-account.component';
import { UserApproveComponent } from './components/user-approve/user-approve.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'registeruser', component: UserRegisterComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'test', component: TestComponent, canActivate: [AdminGuard] },
  { path: 'accstatus', component: AccStatusComponent },
  { path: 'setcred', component: SetPasswordComponent },
  { path: 'unlock', component: UnlockAccountComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'userapprove/:id',
    component: UserApproveComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
