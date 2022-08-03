import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent implements OnInit {
  constructor(
    private _service: AuthService,
    private _transService: TransactionService,
    private router: Router
  ) {}

  user_ref_id: string | null = '';
  fname: string | null = '';

  acc: any = [];

  ngOnInit(): void {
    this.user_ref_id = localStorage.getItem('user_ref_id');
    this.fname = localStorage.getItem('fname');

    this._transService.getAccountByRefId(this.user_ref_id).subscribe((res) => {
      console.log(res);
      this.acc = res;
    });
  }

  logout() {
    this._service.removeToken();
    this.router.navigate(['/home']);
  }
}
