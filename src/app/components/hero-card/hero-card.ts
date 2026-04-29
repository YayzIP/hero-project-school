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
    const updatedHero: HeroModel = { ...this.hero, missionCompleted: true };
    this.heroService.modifyHero(updatedHero).subscribe({
      error: (err) => {
        console.error('Mission complete failed', err);
      }
    });
  }

  selectHero() {
    this.heroService.selectHeroById(this.hero._id);
  }
}
