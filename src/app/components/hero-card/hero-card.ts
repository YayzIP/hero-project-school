import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroModel } from '../../Models/hero.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-card.html',
  styleUrls: ['./hero-card.css'],
})
export class HeroCardComponent {
  @Input() hero!: HeroModel;
  @Output() missionComplete: EventEmitter<number> = new EventEmitter<number>();
  @Output() heroSelected: EventEmitter<number> = new EventEmitter<number>();

  completeMission() {
    this.missionComplete.emit(this.hero.id);
  }

  selectHero() {
    this.heroSelected.emit(this.hero.id);
  }
}
