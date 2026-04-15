import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeroCardComponent } from "../hero-card/hero-card";
import { HeroModel } from '../../Models/hero.model';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, HeroCardComponent],
  templateUrl: './hero-list.html',
  styleUrls: ['./hero-list.css'],
})
export class HeroListComponent {
  /* Input o dummy data */
  @Input() heroes: HeroModel[] = [
    { id: 1, name: 'Dummy 1', superPower: 'Eating', missionCompleted: false },
    { id: 2, name: 'Dummy 2', superPower: 'Drinking', missionCompleted: false },
  ];
  totalCompleted: number = 0;

  onMissionComplete(heroId: number) {
    console.log(`Mission completed by hero with ID: ${heroId}`);
    const hero = this.heroes.find(h => h.id === heroId);
    if (hero) {
      hero.missionCompleted = true;
    }
    this.totalCompleted = this.heroes.filter(h => h.missionCompleted).length;
  }
}
