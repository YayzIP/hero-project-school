import { Component } from '@angular/core';
import { HeroListComponent } from "../../components/hero-list/hero-list";
import { HeroForm } from "../../components/hero-form/hero-form";
import { HeroModel } from '../../Models/hero.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroListComponent, HeroForm],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  hello: string = 'Hello, welcome to the Hero Project School!';

  heroes: HeroModel[] = [
    { id: 1, name: 'Superman', superPower: 'Flight', missionCompleted: false },
    { id: 2, name: 'Batman', superPower: 'Intellect', missionCompleted: false },
    { id: 3, name: 'Wonder Woman', superPower: 'Lasso of Truth', missionCompleted: false }
  ];
}
