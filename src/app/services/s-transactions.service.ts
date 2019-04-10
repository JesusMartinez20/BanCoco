import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class STransactionsService {
  getUrl;
  postUrl;
  constructor(private http: HttpClient) {}

  getMethod(){
    return this.http.get(environment.serverUrl + this.getUrl);
  }

  postMethod(data){
    return this.http.post(environment.serverUrl + this.postUrl, data);
  }

}
