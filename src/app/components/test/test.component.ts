import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(private _service: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this._service.removeToken();
    this.router.navigate(['/userlogin']);
  }
}
