import { Component, Input } from '@angular/core';
import { HeroModel } from '../../Models/hero.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  imports: [CommonModule],
  templateUrl: './hero-form.html',
  styleUrls: ['./hero-form.css'],
})
export class HeroForm {
  @Input() hero!: HeroModel;
}
