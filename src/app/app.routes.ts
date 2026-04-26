import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home),
    
    children: [
      {
        path: '', 
        loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent),
      },
      {
        path: 'character/:id',
        loadComponent: () => import('./profile/profile').then(m => m.Profile),
      }
    ]
  }
];