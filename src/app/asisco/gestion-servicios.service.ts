import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestionServiciosService {

  userName: any;

  constructor(private http: HttpClient) { }

  Login(datos: string): Observable<any> {

    return this.http.post(environment.login, datos, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        accept: "*/*"
      }),
    });
  }

  Registro(datos: string): Observable<any> {

    return this.http.post(environment.registro, datos, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        accept: "*/*"
      }),
    });
  }
}
