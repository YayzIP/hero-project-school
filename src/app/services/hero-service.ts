import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HeroModel } from '../Models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  apiUrl = 'https://crudcrud.com/api/a268e90d0fcc4844bd98827a615a6338/heroes';

  heroes = signal<HeroModel[]>([]);
  selectedHero = signal<HeroModel>({ _id: -1, name: 'hero name', superPower: 'super power', missionCompleted: false });

  constructor(private http: HttpClient) { }

  loadHeroes(): Observable<HeroModel[]> {
    return this.http.get<HeroModel[]>(this.apiUrl).pipe(
      tap((heroes) => this.heroes.set(heroes))
    );
  }

  selectHeroById(heroId: number) {
    const hero = this.heroes().find((h) => h._id === heroId);
    if (hero) {
      this.selectedHero.set(hero);
    }
  }

  addHero(hero: HeroModel): Observable<HeroModel> {
    const nextId = this.heroes().length > 0 ? Math.max(...this.heroes().map((h) => h._id)) + 1 : 0;
    const heroToCreate: HeroModel = { ...hero, _id: nextId };

    return this.http.post<HeroModel>(this.apiUrl, heroToCreate).pipe(
      tap((createdHero) => this.heroes.update((heroes) => [...heroes, createdHero]))
    );
  }

  modifyHero(updatedHero: HeroModel): Observable<HeroModel> {
    return this.http.put<HeroModel>(`${this.apiUrl}/${updatedHero._id}`, updatedHero).pipe(
      tap((hero) =>
        this.heroes.update((heroes) => heroes.map((item) => (item._id === hero._id ? hero : item)))
      )
    );
  }
}
