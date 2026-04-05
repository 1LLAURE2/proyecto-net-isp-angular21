import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { DashboardRepositoryImpl } from './infrastructure/dashboard.repository.impl';
import { DashboardRepository } from './domain/dashboard.repository';
import { GetDashboardStatsUseCase } from './application/get-dashboard-stats.usecase';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/dashboard-layout.page')
        .then(m => m.DashboardLayoutPage),
    providers: [
      GetDashboardStatsUseCase,
      DashboardRepositoryImpl,
      {
        provide: DashboardRepository,
        useExisting: DashboardRepositoryImpl
      }
    ],
    children: [
      // {
      //   path: '',
      //   loadComponent: () =>
      //     import('./ui/pages/overview.page')
      //       .then(m => m.OverviewPage)
      // },

      {
        path: '',
        data: { breadcrumb: 'Inicio' },
        loadComponent: () =>
          import('./pages/overview.page')
            .then(m => m.OverviewPage)
      },
      { path: 'clientes', canActivate: [AuthGuard], loadChildren: () => import('../clientes/clientes.routes').then(m => m.CLIENTES_ROUTES) },

      { path: 'planes', loadChildren: () => import('../planes/planes.route').then(m => m.PLANES_ROUTES) },

      { path: 'pagos', loadChildren: () => import('../pagos/pagos.route').then(m => m.PAGOS_ROUTES) },

      // {
      //   path: 'equipos',
      //   loadComponent: () =>
      //     import('./ui/pages/equipos.page')
      //       .then(m => m.EquiposDashboardPage)
      // },
      // {
      //   path: 'ingresos',
      //   loadComponent: () =>
      //     import('./ui/pages/ingresos.page')
      //       .then(m => m.IngresosDashboardPage)
      // }
    ]
  }
];
