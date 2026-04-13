import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroCardComponent } from "../hero-card-component/hero-card-component";
import { HeroModel } from '../../Models/hero.model';

@Component({
  selector: 'app-main-component',
  imports: [CommonModule, HeroCardComponent],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {
  heroes: HeroModel[] = [
    { id: 1, name: 'Superman', superPower: 'Flight', missionCompleted: false },
    { id: 2, name: 'Batman', superPower: 'Intellect', missionCompleted: false },
    { id: 3, name: 'Wonder Woman', superPower: 'Lasso of Truth', missionCompleted: false }
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
