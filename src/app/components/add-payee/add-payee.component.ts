import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PayeeService } from 'src/app/services/payee.service';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css'],
})
export class AddPayeeComponent implements OnInit {
  constructor(private _service: PayeeService, private router: Router) {}

  user_id: string | null = '';
  email: string | null = '';

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_ref_id');
    this.email = localStorage.getItem('email');
  }

  add(payee: any) {
    payee.user_id = this.email;
    console.log(payee);

    this._service.addPayee(payee).subscribe((res) => {
      console.log(res);

      if (res == '1') {
        alert('payee added successfully');
        this.router.navigate(['/userdashboard']);
      } else {
        alert('try agin later');
      }
    });
  }
}
