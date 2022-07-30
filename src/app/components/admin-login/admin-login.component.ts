import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  done:boolean=false;
  empId:string | undefined;
  //pass:string  | undefined;
  msg: string  | undefined;
  constructor(private router:Router,private route:ActivatedRoute)  {}

  ngOnInit(): void {
  }


  verify(){}

  // verify(){
  //   if(this.empId=="68950483" && this.pass == "welcomeadmin987"){
  //     this.done=true;
  //     this.router.navigate(['/admin'],{})
  //   }
  //   else
  //   this.msg="Invalid Username or password!!!";
  // }

}