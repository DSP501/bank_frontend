import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
//import { user } from '../services/user';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  id: number = 0;
  constructor(private router:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  users: any = [];
  // ngOnInit(): void {
  //   this.users = user;
  // }

  public handleClick() {
    //this.id = item.UserId;
    this.router.navigate(['admin-approval']);
    console.log("incitive method")
  }
}
