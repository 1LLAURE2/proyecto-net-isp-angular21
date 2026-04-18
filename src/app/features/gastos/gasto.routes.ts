import { Routes } from '@angular/router';
import { ListGastos } from './ui/pages/list-gastos/list-gastos';


export const GASTO_ROUTES: Routes = [
  {
    path: '',
    component: ListGastos,
  },
];
