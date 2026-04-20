import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroModel } from '../../Models/hero.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-form.html',
  styleUrls: ['./hero-form.css'],
})
export class HeroForm {
  @Input() hero: HeroModel = { id: -1, name: 'hero name', superPower: 'super power', missionCompleted: false };
  @Output() submitted = new EventEmitter<HeroModel>();

  notifyParent() {
    this.submitted.emit(this.hero);
  }
}
