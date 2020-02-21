import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  //will clear the cache of heroes
  clear() {
    this.messages = [];
  }

  constructor() { }
}
