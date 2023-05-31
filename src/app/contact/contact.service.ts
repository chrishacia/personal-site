import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  http: any;

  constructor() { }

  sendMessage(message: any) {
    return this.http.post('https://formspree.io/f/maylqzqk', message, { responseType: 'text' }).pipe(map((response: any) => {
      if (response) {
        return response;
      }
    },
    (error: any) => {
      return error;
    }
  ));}
}
