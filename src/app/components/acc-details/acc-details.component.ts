import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-acc-details',
  templateUrl: './acc-details.component.html',
  styleUrls: ['./acc-details.component.css'],
})
export class AccDetailsComponent implements OnInit {
  constructor(
    private _service: AdminService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {}

  id: any = 0;
  data: any = [];

  ngOnInit(): void {
    this.id = localStorage.getItem('user_ref_id');
    console.log(this.id);

    this._service.getUserById(this.id).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
