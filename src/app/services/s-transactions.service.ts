import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class STransactionsService {
  getUrl = '/payment.php';
  constructor(private http: HttpClient) {}

  getMethod(){
    return this.http.get(environment.serverUrl + this.getUrl);
  }

}
