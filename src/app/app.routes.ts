import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'plant-list',
    loadComponent: () => import('./plant-list/plant-list.page').then( m => m.PlantListPage)
  },
  {
    path: 'plant-detail/:id',
    loadComponent: () => import('./plant-detail/plant-detail.page').then( m => m.PlantDetailPage)
  },
];
