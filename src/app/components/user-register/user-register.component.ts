import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  constructor(private _service: UserDetailsService, private router: Router) {}

  ngOnInit(): void {}

  registerUser(data: any) {
    console.log(data);
    this._service.addUser(data).subscribe((res) => {
      console.log(res);
      alert('Details Submitted Successfully');
    });
  }
}
