import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateCocoinsService {
  url;
  constructor(private http: HttpClient) { }

  getMethod(){
    return this.http.get(environment.serverUrl+this.url);
  }

  postMethod(form){
    return this.http.post(environment.serverUrl+this.url,form);
  }
}
