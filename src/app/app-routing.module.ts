import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { UnlockAccountComponent } from './components/unlock-account/unlock-account.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'registeruser', component: UserRegisterComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: '', component: UnlockAccountComponent },
  { path: 'test', component: TestComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
