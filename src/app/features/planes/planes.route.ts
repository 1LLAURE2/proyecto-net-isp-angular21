import { Routes } from '@angular/router';
import { GetPlansUseCase } from './application/use-cases/get-plans.usecase';
import { GetPlansSelectUseCase } from './application/use-cases/get-plans-select.usecase';
import { PlanRepositoryImpl } from './infraestructure/repositories/plan.repository.impl';
import { PlanRepository } from './dominio/repositories/plan.repository';

export const PLANES_ROUTES: Routes = [
  {
    path:'',
    providers: [
      {
        provide: PlanRepository,
        useClass: PlanRepositoryImpl
      },
      // GetPlansSelectUseCase,
      GetPlansUseCase
    ],
    loadComponent: ()=> import('./UI/list-planes/list-planes').then(m=>m.ListPlanes)
  },
];
