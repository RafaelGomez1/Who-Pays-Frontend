import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  serverUrl = 'http://134.209.240.175:8100';

  constructor(private http: HttpClient) { }


}
