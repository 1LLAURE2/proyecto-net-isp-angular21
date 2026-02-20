import { Routes } from '@angular/router';
import { Login } from './auth/login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  // { path: 'mi-primer-componente', component: NombreDelComponente },
  // { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) },
  // { path: 'equipos', loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' } // ruta por defecto
];
