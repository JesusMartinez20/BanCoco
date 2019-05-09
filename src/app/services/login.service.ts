import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(cc: string, cvv: string) {
    return this.http.post(`${environment.serverUrl}/login`, {
      cc: cc,
      cvv: cvv
    });
  }
}
