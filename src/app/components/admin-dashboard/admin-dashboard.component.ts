import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

import { OrderModule, OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private _service: AdminService, private router: Router) {}

  users: any = [];
  admin: string | null = '';
  orderHeader: string = '';

  ngOnInit(): void {
    this._service.getData().subscribe((res) => {
      console.log(res);
      this.users = res;
    });

    this.admin = localStorage.getItem('emp_name');
  }

  logout() {
    this._service.removeToken();
    this.router.navigate(['/adminlogin']);
  }

  sort(header: string) {
    this.orderHeader = header;
  }

  verify(data: any) {
    this.router.navigate([`/userapprove/${data}`]);
  }
}
