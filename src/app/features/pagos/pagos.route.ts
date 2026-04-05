import { Routes } from "@angular/router";

export const PAGOS_ROUTES: Routes = [
  {
    path:'',
    providers: [
      // {
      //   provide: PlanRepository,
      //   useClass: PlanRepositoryImpl
      // },
      // GetPlansSelectUseCase,

    ],
    loadComponent: ()=> import('./ui/pages/list-pagos/list-pagos').then(m=>m.ListPagos)
  },
];
