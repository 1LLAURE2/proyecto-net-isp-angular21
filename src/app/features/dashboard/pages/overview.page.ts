
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardStats } from '../domain/dashboard-stats.model';
import { GetDashboardStatsUseCase } from '../application/get-dashboard-stats.usecase';


@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6">

      <!-- Título -->
      <div>
        <h2 class="text-2xl font-bold text-slate-800">
          Resumen General
        </h2>
        <p class="text-sm text-slate-500">
          Estado actual del sistema
        </p>
      </div>

      <!-- KPIs -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-sm text-slate-500">Clientes Activos</p>
          <h3 class="text-2xl font-bold text-slate-800">
            {{ stats?.clientesActivos }}
          </h3>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-sm text-slate-500">Ingresos del Mes</p>
          <h3 class="text-2xl font-bold text-slate-800">
            S/ {{ stats?.ingresosMensuales }}
          </h3>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-sm text-slate-500">Tickets Abiertos</p>
          <h3 class="text-2xl font-bold text-slate-800">
            {{ stats?.ticketsAbiertos }}
          </h3>
        </div>

        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-sm text-slate-500">Nodos Activos</p>
          <h3 class="text-2xl font-bold text-slate-800">
            {{ stats?.nodosActivos }}
          </h3>
        </div>

      </div>

    </div>
  `
})
export class OverviewPage {

  private getStats = inject(GetDashboardStatsUseCase);

  stats?: DashboardStats;

  ngOnInit() {
    this.getStats.execute()
      .subscribe(data => this.stats = data);
  }

}
