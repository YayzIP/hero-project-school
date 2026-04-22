import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroModel } from '../../Models/hero.model';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-card.html',
  styleUrls: ['./hero-card.css'],
})
export class HeroCardComponent {
  @Input() hero!: HeroModel;

  constructor(private heroService: HeroService) { }

  completeMission() {
    this.heroService.heroes.update(heroes =>
      heroes.map(h => h.id === this.hero.id ? { ...h, missionCompleted: true } : h)
    );
  }

  selectHero() {
    this.heroService.selectHeroById(this.hero.id);
  }
}
