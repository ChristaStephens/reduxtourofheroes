import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';

@Component({
  // selector to help use this component in other components' html
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
 hero: Hero = {
   id: 1,
   name: 'Windstorm',
   power: 'weather',
   city: 'Chicago'
 };

  constructor() { }

  ngOnInit() {
  }

}
