import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseurl: string = 'http://localhost:62044/api/userlogin';

  currentuser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post<any>(this.baseurl, data);
  }

  setToken(data: any) {
    localStorage.setItem('login', 'true');

    localStorage.setItem('user_ref_id', data.user_ref_id);
    localStorage.setItem('fname', data.fname);
    localStorage.setItem('lname', data.lname);
  }

  removeToken() {
    localStorage.clear();
  }

  loadCurrentUser(data: any) {
    const token = localStorage.getItem('login');
    const user = token
      ? {
          user_ref_id: data.user_ref_id,
          fname: data.fname,
          lname: data.lname,
          email: data.email,
        }
      : null;

    this.currentuser.next(user);
  }

  isLoggedIn(): boolean {
    var user = localStorage.getItem('login');
    if (user != null && user == 'true') return true;
    return false;
  }
}