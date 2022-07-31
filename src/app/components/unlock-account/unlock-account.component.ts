import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css'],
})
export class UnlockAccountComponent implements OnInit {
  passDiff: boolean = false;
  passUpdated: boolean = false;
  accOpen: boolean = false;

  constructor(private _service: AuthService) {}

  ngOnInit(): void {}

  unlock(data: any) {
    if (data.password != data.r_password) {
      this.passDiff = true;
    } else {
      this._service.unlock(data).subscribe((res) => {
        if (res == '0') {
          this.accOpen = true;
        } else if (res == '1') {
          this.passUpdated = true;
        }
      });
    }
    console.log(data);
  }
}
