import { Injectable, signal } from '@angular/core';
import { HeroModel } from '../Models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  heroes = signal<HeroModel[]>([
    { id: 0, name: 'Superman', superPower: 'Flight', missionCompleted: false },
    { id: 1, name: 'Batman', superPower: 'Intellect', missionCompleted: false },
    { id: 2, name: 'Wonder Woman', superPower: 'Lasso of Truth', missionCompleted: false }
  ]);
  selectedHero = signal<HeroModel>({ id: -1, name: 'hero name', superPower: 'super power', missionCompleted: false });

  selectHeroById(heroId: number) {
    const hero = this.heroes().find(h => h.id === heroId);
    if (hero) {
      this.selectedHero.set(hero);
    }
  }

  addHero(hero: HeroModel) {
    hero.id = this.heroes().length > 0 ? Math.max(...this.heroes().map(h => h.id)) + 1 : 0;
    this.heroes.update(heroes => [...heroes, hero]);
  }

  modifyHero(updatedHero: HeroModel) {
    this.heroes.update(heroes => {
      const index = heroes.findIndex(h => h.id === updatedHero.id);
      if (index !== -1) {
        heroes[index] = updatedHero;
      }
      return heroes;
    });
  }

  constructor() { }

}
