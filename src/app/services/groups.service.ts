import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from '../models/Group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  serverUrl = 'http://134.209.240.175:8100';

  constructor(private http: HttpClient) { }

  getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.serverUrl}/groups`).pipe();
  }

  getGroupById(groupId: string): Observable<Group> {
    return this.http.get<Group>(`${this.serverUrl}/groups/` + groupId).pipe();
  }

  deleteGroup(groupId: string) {
    return this.http.delete(`${this.serverUrl}/groups/` + groupId + `/delete`, {headers : {Accept: 'application/json'}}).pipe();
  }

  getGroupBalance(groupId: string) {}


}
