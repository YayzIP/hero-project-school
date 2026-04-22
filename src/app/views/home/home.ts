import { Component } from '@angular/core';
import { HeroListComponent } from "../../components/hero-list/hero-list";
import { HeroForm } from "../../components/hero-form/hero-form";
import { HeroModel } from '../../Models/hero.model';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroListComponent, HeroForm],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  hello: string = 'Hello, welcome to the Hero Project School!';

  constructor(private heroService: HeroService) {

  }


  onHeroSubmit(hero: HeroModel) {
    /* existing hero check */
    if (this.heroService.heroes().some(h => h.id == hero.id)) {
      this.heroService.selectedHero.set({ id: -1, name: 'hero name', superPower: 'super power', missionCompleted: false });
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
      hero.id = this.heroService.heroes().length > 0 ? Math.max(...this.heroService.heroes().map(h => h.id)) + 1 : 0;
    }
    this.heroService.heroes.update(heroes => [...heroes, hero]);
    this.heroService.selectedHero.set({ id: -1, name: 'hero name', superPower: 'super power', missionCompleted: false });
  }

  onHeroSelected(heroId: number) {
    const hero = this.heroService.heroes().find(h => h.id === heroId);
    if (hero) {
      this.heroService.selectedHero.set(hero);
    }
  }
}
