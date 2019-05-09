import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(usuario: string, contrasena: string) {
    return this.http.post(`${environment.serverUrl}/login`, {
      usuario: usuario,
      contrasena: contrasena
    }).pipe(map<any, any>(result => {
      localStorage.setItem('token', result.token);
      return result;
    }))
  }

  logout() {
    localStorage.removeItem('token');
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
