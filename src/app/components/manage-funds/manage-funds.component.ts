import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-manage-funds',
  templateUrl: './manage-funds.component.html',
  styleUrls: ['./manage-funds.component.css'],
})
export class ManageFundsComponent implements OnInit {
  acc: any = [];
  user: any = [];

  constructor(
    private _trasnService: TransactionService,
    private _userService: UserDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._trasnService.getAccounts().subscribe((res) => {
      if (res != null) {
        this.acc = res;
        console.log(this.acc);
      }
    });
  }

  pay(data: any) {
    // this.getUserId(data.user_ref_id);
    data.trans_mode = 'bank_counter';

    // var pay = this.getpayee(data.payee);

    data.to_acc_no = this.acc.account_no;
    data.to_name = 'self';
    data.to_bank = 'LTI';
    data.to_ifsc = this.acc.ifsc;

    data.user_id = this.user.email;

    console.log(data);
  }

  // getUserId(id: any): any {
  //   this._userService.getUserByRefId(id).subscribe((res) => {
  //     this.user = res;
  //     console.log(this.user);
  //   });
  // }
}
