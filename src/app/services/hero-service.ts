import { Injectable, signal, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HeroModel } from '../Models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private http = inject(HttpClient);
  apiUrl = 'https://crudcrud.com/api/5527b5133ff94e089562c71261e07102/heroes';

  heroes = signal<HeroModel[]>([]);
  selectedHero = signal<HeroModel>({ _id: '', name: 'hero name', superPower: 'super power', missionCompleted: false });
  isLoading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    effect(() => {
      this.loadHeroes().subscribe();
    });
  }

  loadHeroes(): Observable<HeroModel[]> {
    this.isLoading.set(true);
    this.error.set(null);

    return this.http.get<HeroModel[]>(this.apiUrl).pipe(
      tap((heroes) => this.heroes.set(heroes)),
      tap(() => this.isLoading.set(false)),
      catchError((err) => {
        this.error.set(err.message || 'Failed to load heroes');
        this.isLoading.set(false);
        return throwError(() => err);
      })
    );
  }

  selectHeroById(heroId: string) {
    const hero = this.heroes().find((h) => h._id === heroId);
    if (hero) {
      this.selectedHero.set(hero);
    }
  }

  addHero(hero: HeroModel): Observable<HeroModel> {
    const { _id, ...heroToCreate } = hero;

    return this.http.post<HeroModel>(this.apiUrl, heroToCreate).pipe(
      tap((createdHero) => this.heroes.update((heroes) => [...heroes, createdHero]))
    );
  }

  modifyHero(hero: HeroModel): Observable<HeroModel> {
    const { _id, ...heroWithoutId } = hero;
    return this.http.put<HeroModel>(`${this.apiUrl}/${_id}`, heroWithoutId).pipe(
      tap((responseHero) =>
        this.heroes.update((heroes) =>
          heroes.map((item) =>
            item._id === _id ? { ...item, ...responseHero, _id } : item
          )
        )
      )
    );
  }
}
