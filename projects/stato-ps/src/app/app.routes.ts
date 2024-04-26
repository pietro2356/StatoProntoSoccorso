import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.routes')
  },
  {
    path: 'stato-ps',
    loadChildren: () => import('./feature/stato-ps/stato-ps.routes')
  },
  {
    path: '**',
    redirectTo: ''
  },
];
