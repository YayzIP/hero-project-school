import { Component, computed, EventEmitter, inject, Input, Output, Signal } from '@angular/core';
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
  hero: Signal<HeroModel> = computed(() => this.heroService.selectedHero());
  message: Signal<string> = computed(() => this.hero().id === -1 ? 'Add New Hero' : 'Edit Hero');

  submitHero() {
    const existingIndex = this.heroService.heroes().findIndex(h => h.id === this.hero().id);
    if (existingIndex !== -1) {
      this.heroService.modifyHero(this.hero());
    } else {
      this.heroService.addHero(this.hero());
    }
    this.heroService.selectedHero.set({ id: -1, name: 'hero name', superPower: 'super power', missionCompleted: false });
  }
}