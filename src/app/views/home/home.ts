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
    { id: 0, name: 'Superman', superPower: 'Flight', missionCompleted: false },
    { id: 1, name: 'Batman', superPower: 'Intellect', missionCompleted: false },
    { id: 2, name: 'Wonder Woman', superPower: 'Lasso of Truth', missionCompleted: false }
  ];
  selectedHero: HeroModel = { id: -1, name: 'hero name', superPower: 'super power', missionCompleted: false };

  onHeroSubmit(hero: HeroModel) {
    /* existing hero check */
    if (this.heroes.some(h => h.id == hero.id)) {
      this.selectedHero = { id: -1, name: 'hero name', superPower: 'super power', missionCompleted: false };
      return;
    }
    if (hero.id < -1) {
      alert('Invalid hero ID!');
      return;
    }
    if (!hero.name.trim() || !hero.superPower.trim()) {
      alert('Hero name and super power cannot be empty!');
      return;
    }
    if (hero.id === -1) {
      hero.id = this.heroes.length > 0 ? Math.max(...this.heroes.map(h => h.id)) + 1 : 0;
    }
    this.heroes.push(hero);
    this.selectedHero = { id: -1, name: 'hero name', superPower: 'super power', missionCompleted: false };
  }

  onHeroSelected(heroId: number) {
    const hero = this.heroes.find(h => h.id === heroId);
    if (hero) {
      this.selectedHero = hero;
    }
  }
}
