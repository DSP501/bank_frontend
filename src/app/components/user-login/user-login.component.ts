import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  wrongPass: boolean = false;
  accLocked: boolean = false;

  constructor(private _service: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(data: any) {
    console.log(data);
    this._service.login(data).subscribe((res) => {
      if (res != null) {
        if (res == '0') {
          this.wrongPass = true;
          console.log('wrong password');
        } else if (res == '-1') {
          this.accLocked = true;
          //console.log('account locked');
        } else if (res == '100') {
          console.log('set pass . . . ');
          this.router.navigate(['/setcred']);
        } else {
          // console.log(res.fname);
          this._service.setToken(res);
          this.router.navigate(['/userdashboard']);
        }
      } else {
        console.log('failure');
      }
    });
  }
}
