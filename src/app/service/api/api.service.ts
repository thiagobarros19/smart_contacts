import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  url(): string {
    return "http://localhost:3000";
  }
}
