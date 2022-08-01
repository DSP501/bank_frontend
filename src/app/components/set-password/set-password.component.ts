import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css'],
})
export class SetPasswordComponent implements OnInit {
  passDiff: boolean = false;
  tpassDiff: boolean = false;
  error: boolean = false;
  constructor(private _service: AuthService, private router: Router) {}

  ngOnInit(): void {}

  setPass(data: any) {
    console.log(data);

    if (data.password != data.r_password) {
      this.passDiff = true;
    }
    if (data.tpassword != data.r_tpassword) {
      this.tpassDiff = true;
    }

    if (
      data.password == data.r_password &&
      data.tpassword == data.r_tpassword
    ) {
      this._service.setcred(data).subscribe((res) => {
        if (res == '1') {
          alert('Password Changed Successfully');
          this.router.navigate(['/userlogin']);
        } else {
          this.error = true;
        }
      });
      console.log('ok');
    }
  }
}
