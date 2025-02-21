import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) {

  }
  register(signRequest:any): Observable <any> {
    return this.http.post(BASE_URL +  'signup' , signRequest);
  }

  login(loginRequest:any): Observable <any> {
    return this.http.post(BASE_URL +  'login' , loginRequest);
  }
  hello(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(BASE_URL + 'api/hello');
  }

  private createAuthorizationHeader(): HttpHeaders {
    const jwtToken = localStorage.getItem('jwt');
    let headers = new HttpHeaders();

    if (jwtToken) {
      console.log("JWT token found in local storage.");
      headers = headers.set('Authorization', "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage.");
    }

    return headers;
  }


}
