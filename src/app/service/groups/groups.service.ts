import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';

import { Group } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.api.url()}/groups`);
  }

  getGroupsById(id: number): Observable<Group> {
    return this.http.get<Group>(`${this.api.url()}/groups/${id}`);
  }

  postGroups(group: Group): Observable<Group> {
    return this.http.post<Group>(`${this.api.url()}/groups`, group);
  }

  patchGroups(id: number, group: Group): Observable<Group> {
    return this.http.patch<Group>(`${this.api.url()}/groups/${id}`, group);
  }

  deleteGroups(id: number): Observable<Group[]> {
    return this.http.delete<Group[]>(`${this.api.url()}/groups/${id}`);
  }
}
