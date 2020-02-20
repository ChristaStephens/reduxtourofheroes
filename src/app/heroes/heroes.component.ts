import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService} from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  // selector to help use this component in other components' html
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  //import heroes from mock heroes
  // heroes = HEROES;

  // we need to replace the declaration of heroes to
  // bring in the heroes service with the new information below

  heroes: Hero[];

  // getHeroes(): void {
  //   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  // }

  //assign the clicked hero from the html
  selectedHero: Hero;
//   onSelect(hero: Hero): void {
//   this.selectedHero = hero;
// }

  //  hero: Hero = {
  //    id: 1,
  //    name: 'Windstorm',
  //    power: 'weather',
  //    city: 'Chicago'
  //  };

  //same name as the service class
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
