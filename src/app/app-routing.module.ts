import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccDetailsComponent } from './components/acc-details/acc-details.component';
import { AccStatusComponent } from './components/acc-status/acc-status.component';
import { AccstatmentComponent } from './components/accstatment/accstatment.component';
import { AddPayeeComponent } from './components/add-payee/add-payee.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';
import { ImpsComponent } from './components/imps/imps.component';
import { ManageFundsComponent } from './components/manage-funds/manage-funds.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { TestComponent } from './components/test/test.component';
import { UnlockAccountComponent } from './components/unlock-account/unlock-account.component';
import { UserApproveComponent } from './components/user-approve/user-approve.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registeruser', component: UserRegisterComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'test', component: TestComponent, canActivate: [AuthGuard] },
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
  {
    path: 'managefunds',
    component: ManageFundsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'userdashboard',
    component: UserdashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'accstatment',
    component: AccstatmentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'accdetails',
    component: AccDetailsComponent,
    canActivate: [AuthGuard],
  },

  { path: 'payee', component: AddPayeeComponent, canActivate: [AuthGuard] },
  { path: 'fundtransfer', component: ImpsComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
