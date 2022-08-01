import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  dontAllow: boolean = false;
  noAccess: boolean = false;
  constructor(private _service: AdminService, private router: Router) {}

  ngOnInit(): void {}

  login(data: any) {
    this._service.login(data).subscribe((res) => {
      if (res == '1') {
        this.dontAllow = true;
      } else if (res == '0') {
        this.noAccess = true;
      } else {
        this._service.setToken(res);
        this.router.navigate(['/test']);
      }
    });

    console.log(data);
  }
}
