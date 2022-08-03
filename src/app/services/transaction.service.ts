import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  baseurl: string = 'http://localhost:62044/api/transaction';

  add(data: any): Observable<any> {
    return this.http.post<any>(this.baseurl, data);
  }

  getAccounts(): Observable<any> {
    return this.http.get<any>(this.baseurl);
  }

  getAccountByRefId(id : any) : Observable<any> {
    return this.http.get<any>(`${this.baseurl}/getAccByRefId/${id}`);
  }



}
