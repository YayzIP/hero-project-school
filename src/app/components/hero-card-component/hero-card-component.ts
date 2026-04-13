import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroModel } from '../../Models/hero.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-card-component',
  imports: [CommonModule],
  templateUrl: './hero-card-component.html',
  styleUrl: './hero-card-component.css',
})
export class HeroCardComponent {
  @Input() hero!: HeroModel;
  @Output() missionComplete: EventEmitter<number> = new EventEmitter<number>();

  notifyParent() {
    this.missionComplete.emit(this.hero.id);
  }
}
