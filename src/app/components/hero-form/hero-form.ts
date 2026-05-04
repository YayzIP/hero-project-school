import { Component, computed, inject, Signal, signal, effect } from '@angular/core';
import { HeroModel } from '../../Models/hero.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-form.html',
  styleUrls: ['./hero-form.css'],
})
export class HeroForm {
  heroService = inject(HeroService);
  formHero = signal<HeroModel>({ _id: '', name: 'hero name', superPower: 'super power', missionCompleted: false });
  message: Signal<string> = computed(() => this.formHero()._id === '' ? 'Add New Hero' : 'Edit Hero');

  constructor() {
    // Reactively update formHero whenever selectedHero changes
    effect(() => {
      this.formHero.set(this.heroService.selectedHero());
    });
  }

  submitHero() {
    const hero = this.formHero();
    const existingIndex = this.heroService.heroes().findIndex(h => h._id === hero._id);

    const request = existingIndex !== -1
      ? this.heroService.modifyHero(hero)
      : this.heroService.addHero(hero);

    request.subscribe({
      next: () => {
        this.heroService.selectedHero.set({
          _id: '',
          name: 'hero name',
          superPower: 'super power',
          missionCompleted: false,
        });
        this.formHero.set({
          _id: '',
          name: 'hero name',
          superPower: 'super power',
          missionCompleted: false,
        });
      },
      error: (err) => {
        console.error('Hero save failed', err);
      }
    });
  }
}