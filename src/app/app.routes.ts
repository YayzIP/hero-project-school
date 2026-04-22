import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./views/home/home').then(m => m.Home) },
    /* { path: 'hero/:id', loadComponent: () => import('./views/hero-detail/hero-detail').then(m => m.HeroDetail) }, */
    { path: '**', redirectTo: 'home' }
];
