import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseurl: string = 'http://localhost:62044/api/admin';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post<any>(this.baseurl, data);
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.baseurl);
  }

  setToken(data: any) {
    localStorage.setItem('admin_login', 'true');
    localStorage.setItem('emp_id', data.emp_id);
    localStorage.setItem('emp_name', data.emp_name);
  }

  removeToken() {
    localStorage.removeItem('admin_login');
    localStorage.removeItem('emp_id');
    localStorage.removeItem('emp_name');
  }

  isLogged(): boolean {
    var data = localStorage.getItem('admin_login');
    if (data == 'true') return true;
    return false;
  }
}
