import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //replaced with an observable for asynchronous -
  //to work with data from a server
  //will get the mock heroes and return them
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // this will return an observable an array
  // of mocked heroes and shows a message when
  //the heroes are fetched
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  //injecting a service within a service byt first importing it
  //then declaring it with parameters (it's the same name as the class)
  constructor(private messageService: MessageService) { }
}
