import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroModel } from '../../Models/hero.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-card',
  imports: [CommonModule],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCardComponent {
  @Input() hero!: HeroModel;
  @Output() missionComplete: EventEmitter<number> = new EventEmitter<number>();

  notifyParent() {
    this.missionComplete.emit(this.hero.id);
  }
}
