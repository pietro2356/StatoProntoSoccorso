import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'stato-ps',
    pathMatch: 'full',
  },
  {
    path: 'stato-ps',
    loadChildren: () => import('./feature/stato-ps/stato-ps.module').then(m => m.StatoPsModule),
  },
  {
    path: '**',
    redirectTo: 'stato-ps',
    pathMatch: 'full',
  },
];
