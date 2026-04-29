import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { HeroCardComponent } from "../hero-card/hero-card";
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, HeroCardComponent],
  templateUrl: './hero-list.html',
  styleUrls: ['./hero-list.css'],
})
export class HeroListComponent implements OnInit {
  heroService = inject(HeroService);
  heroes = this.heroService.heroes;
  heroCount = computed(() => this.heroes().length);
  totalCompleted = computed(() => this.heroes().filter(h => h.missionCompleted).length);

  ngOnInit() {
    this.heroService.loadHeroes().subscribe();
  }
}
