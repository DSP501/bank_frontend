import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-acc-status',
  templateUrl: './acc-status.component.html',
  styleUrls: ['./acc-status.component.css'],
})
export class AccStatusComponent implements OnInit {
  isapprove: boolean = false;

  constructor(private _service: UserDetailsService) {}

  ngOnInit(): void {}

  status(data: any) {
    this._service.getUserById(data).subscribe((res) => {
      console.log(res);

      if (res.isapproved == true) {
        this.isapprove = true;
      }
    });

    console.log(data);
  }
}
