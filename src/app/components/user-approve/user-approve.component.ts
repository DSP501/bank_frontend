import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from 'src/app/models/UserDetails';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-approve',
  templateUrl: './user-approve.component.html',
  styleUrls: ['./user-approve.component.css'],
})
export class UserApproveComponent implements OnInit {
  constructor(
    private _service: AdminService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {}

  id: number = 0;
  data: any = [];

  ngOnInit(): void {
    this.id = this.aRouter.snapshot.params['id'];
    console.log(this.id);

    this._service.getUserById(this.id).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }

  approve(id: number) {
    this._service.approveUser(id).subscribe((res) => {
      console.log(res);
      alert('Account Approved');
      this.router.navigate(['/admindashboard']);
    });
  }
}
