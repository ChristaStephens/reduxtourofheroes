import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';

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
  // of mocked heroes
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() { }
}
