import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  baseurl: string = 'http://localhost:62044/api/user';

  constructor(private http: HttpClient) {}

  getAllUser(): Observable<any> {
    return this.http.get<any>(this.baseurl);
  }

  getUserById(id: any): Observable<any> {
    console.log(id.email);
    return this.http.post<any>(`${this.baseurl}/getuserbyid`, id);
  }

  getUnverifiedUser(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/getUnverifiedUser`);
  }

  addUser(data: any): Observable<any> {
    return this.http.post<any>(this.baseurl, data);
  }
}
