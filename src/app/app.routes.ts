import { Routes } from '@angular/router';
import { Login } from './auth/login/login';

export const routes: Routes = [
  // { path: 'login', component: Login },
  // { path: 'mi-primer-componente', component: NombreDelComponente },
  // { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) },
  // { path: 'equipos', loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule) },

  //./features/auth/ui/login.page
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/ui/pages/login/login.page').then(m => m.LoginPage)
  },
  { path: 'clientes',loadChildren: ()=> import('./features/clientes/clientes.routes').then(m=>m.CLIENTES_ROUTES)},
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // ruta por defecto
  {
    path: '**',
    redirectTo: 'login'
  }
];
