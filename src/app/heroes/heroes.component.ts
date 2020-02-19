import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  // selector to help use this component in other components' html
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  //import heroes from mock heroes
  heroes = HEROES;
  //assign the clicked hero from the html
  selectedHero: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  //  hero: Hero = {
  //    id: 1,
  //    name: 'Windstorm',
  //    power: 'weather',
  //    city: 'Chicago'
  //  };

  constructor() { }

  ngOnInit() {
  }

}
