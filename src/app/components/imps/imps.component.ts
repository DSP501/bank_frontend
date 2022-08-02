import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PayeeService } from 'src/app/services/payee.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css'],
})
export class ImpsComponent implements OnInit {
  payee: any = [];
  user_ref_id: string | null = '';
  user_id: string | null = '';

  less_amt: boolean = false;

  err_display: boolean = false;

  constructor(
    private _payeeService: PayeeService,
    private _transService: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user_ref_id = localStorage.getItem('user_ref_id');
    this.user_id = localStorage.getItem('email');
    this._payeeService.getById(this.user_ref_id).subscribe((res) => {
      this.payee = res;
      console.log(res);
    });
  }
  // amount: 50;
  // crdr: '';
  // payee: '4';
  // remark: 'vada pav';
  // to_acc_no: '';
  // to_bank: '';
  // to_ifsc: '';
  // trans_date: '2022-08-20';
  // trans_mode: '';
  // trans_type: 'rtgs';
  // user_id: '';

  pay(data: any) {
    data.crdr = 'debit';
    data.trans_mode = 'fund_transfer';

    var pay = this.getpayee(data.payee);

    data.to_acc_no = pay.account_no;
    data.to_name = pay.payee_name;
    data.to_bank = pay.bank_name;
    data.to_ifsc = pay.ifsc;

    data.user_id = this.user_id;

    console.log(data);

    this._transService.add(data).subscribe((res) => {
      if (res == '0') {
        this.less_amt = true;
      } else if (res == '1') {
        alert('Transaction Successfull');
        this.router.navigate(['/userdashboard']);
      } else {
        this.err_display = true;
      }

      console.log(res);
    });
  }

  change(data: any) {
    console.log(data);
  }

  getpayee(id: any): any {
    var result;
    this.payee.forEach((element: any) => {
      console.log(element);
      if (element.payee_id == id) {
        result = element;
      }
    });

    if (result != null) {
      return result;
    } else {
      return -1;
    }
  }
}
