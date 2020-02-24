import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Storm', power: 'weather', city: 'Chicago' },
    { id: 11, name: 'Dr. Dope', power: 'dopeness', city: 'New York' },
    { id: 12, name: 'The Animal', power: 'rudeness', city: 'Sydney' },
    { id: 13, name: 'Beary', power: 'paws', city: 'Bronx' },
    { id: 14, name: 'Brotha Man', power: 'hotep', city: 'Detroit' },
    { id: 15, name: 'OoohCanISee?', power: 'sticky fingers', city: 'Oak Park' },
    { id: 16, name: 'Super Mom', power: 'responsibility', city: 'Bingham Farms' },
    { id: 17, name: 'The Shield', power: 'defenses', city: 'Jacksonville' },
    { id: 18, name: 'Mr. Banks', power: 'rich', city: 'Boston' },
    { id: 19, name: 'Harriett', power: 'freedom', city: 'Dorchester County' },
    { id: 20, name: 'Cool Cosmos', power: 'the universe', city: 'Brooklyn' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
