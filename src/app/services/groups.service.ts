import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from '../models/Group';
import {GroupBalance} from '../models/GroupBalance';
import {GroupExpenses} from '../models/GroupExpenses';

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

  getGroupBalance(groupId: string): Observable<GroupBalance> {
    return this.http.get<GroupBalance>(`${this.serverUrl}/groups/${groupId}/filtered/balance`,
        {headers : {Accept: 'application/json', 'Content-Type' : 'application/json'}}).pipe();
  }

  addExpensesToGroup(groupExpenses: GroupExpenses, groupId: string): Observable<Group> {
    return this.http.post<Group>(`${this.serverUrl}/groups/${groupId}/expenses/add`, groupExpenses,
        {headers : {Accept: 'application/json', 'Content-Type' : 'application/json'}}).pipe();
  }
}
