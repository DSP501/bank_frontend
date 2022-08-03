import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-accstatment',
  templateUrl: './accstatment.component.html',
  styleUrls: ['./accstatment.component.css'],
})
export class AccstatmentComponent implements OnInit {
  constructor(private _transService: TransactionService) {}

  user_id: string | null = '';
  trans: any = [];
  fname: string | null = '';

  orderHeader: string = '';

  ngOnInit(): void {
    this.user_id = localStorage.getItem('email');
    this.fname = localStorage.getItem('fname');
    console.log(this.user_id);
    this._transService.getTransaction().subscribe((res) => {
      console.log(res);

      this.getTrans(res);
      console.log(this.trans);
    });
  }

  getTrans(res: any): any {
    res.forEach((element: any) => {
      if (element.user_id == this.user_id) {
        this.trans.push(element);
      }
    });
  }

  sort(header: string) {
    this.orderHeader = header;
  }
}
