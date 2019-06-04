import { Injectable } from '@angular/core';
import {UserLogin} from '../models/UserLogin';
import {Observable} from 'rxjs';
import {LogInRs} from '../models/LogInRs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  serverUrl = 'http://134.209.240.175:8100';
  localserverUrl = 'http://localhost:8081';

 httOptions = {
    headers: new HttpHeaders({Accept : 'application/json'})
  };

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  checkUserLogin(userLogin: UserLogin): Observable<LogInRs> {
    return this.http.post<LogInRs>(`${this.serverUrl}/login`, userLogin,
        { headers : {Accept : 'application/json'}});
  }

  getHeaders() {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');


  }


}
