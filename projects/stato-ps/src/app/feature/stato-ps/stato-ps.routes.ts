import { Routes } from '@angular/router';

export default <Routes>[
  {
    path: '',
    loadComponent: () => import('./stato-ps/stato-ps.component').then((m) => m.StatoPsComponent),
  }
];
