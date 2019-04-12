import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateCocoinsService {
  getUrl = '/usuario.php';
  postUrl = '';
  constructor(private http: HttpClient) { }

  getMethod(){
    const headers = new HttpHeaders().append('Authorization', 'JWT ' + localStorage.getItem('token'));
    return this.http.get(environment.serverUrl + this.getUrl, {headers: headers});
  }

  postMethod(form){
    const headers = new HttpHeaders().append('Authorization', 'JWT ' + localStorage.getItem('token'));
    return this.http.post(environment.serverUrl+this.postUrl,form, {headers: headers});
  }
}
