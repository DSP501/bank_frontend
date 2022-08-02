import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PayeeService {
  baseurl: string = 'http://localhost:62044/api/payee';
  constructor(private http: HttpClient) {}

  addPayee(payee: any): Observable<any> {
    return this.http.post<any>(this.baseurl, payee);
  }
}
