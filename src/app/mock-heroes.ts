import { Hero } from './hero';

//exporting from the model of "hero.ts (the contract)" to here, to create an array of heroes
export let HEROES: Hero[] = [
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
