import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateCocoinsService {

  constructor(private http: HttpClient) {
  }

  get user(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.serverUrl}/usuarios`);
  }

  addCocoins(quantity: number) {
    return this.http.put(`${environment.serverUrl}/usuarios`, {Fondos: quantity});
  }
}
