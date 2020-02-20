import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //injecting a service within a service byt first importing it
  //then declaring it with parameters (it's the same name as the class)
  constructor(private messageService: MessageService) { }

  // this will return an observable an array
  // of mocked heroes and shows a message when
  //the heroes are fetched
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
