import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';

import { Contact } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.api.url()}/contacts`);
  }

  getContactsById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.api.url()}/contacts/${id}`);
  }

  postContacts(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.api.url()}/contacts`, contact);
  }

  patchContacts(id: number, contact: Contact): Observable<Contact> {
    return this.http.patch<Contact>(`${this.api.url()}/contacts/${id}`, contact);
  }

  deleteContacts(id: number): Observable<Contact[]> {
    return this.http.delete<Contact[]>(`${this.api.url()}/contacts/${id}`);
  }
}
