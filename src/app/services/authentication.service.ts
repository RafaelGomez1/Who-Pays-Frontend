import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserLogin} from '../models/UserLogin';
import {Observable} from 'rxjs';
import {LogInRs} from '../models/LogInRs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  serverUrl = 'http://134.209.240.175:8100';

 httOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  checkUserLogin(userLogin: UserLogin): Observable<LogInRs> {
    return this.http.post<LogInRs>(`${this.serverUrl}/login`, userLogin,
        { headers : {'Content-Type' : 'application/json', Accept : 'application/json'}});
  }

  getHeaders() {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');


  }


}
