import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { OrderModule, OrderPipe } from 'ngx-order-pipe';

import { FormsModule } from '@angular/forms';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { TestComponent } from './components/test/test.component';
import { UnlockAccountComponent } from './components/unlock-account/unlock-account.component';
import { AccStatusComponent } from './components/acc-status/acc-status.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserApproveComponent } from './components/user-approve/user-approve.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPayeeComponent } from './components/add-payee/add-payee.component';
import { ImpsComponent } from './components/imps/imps.component';
import { ManageFundsComponent } from './components/manage-funds/manage-funds.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    TestComponent,
    UnlockAccountComponent,
    AccStatusComponent,
    SetPasswordComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    UserApproveComponent,
    NotfoundComponent,
    HomeComponent,
    NavbarComponent,
    AddPayeeComponent,
    ImpsComponent,
    ManageFundsComponent,
    UserdashboardComponent,
  ],
  imports: [
    OrderModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
