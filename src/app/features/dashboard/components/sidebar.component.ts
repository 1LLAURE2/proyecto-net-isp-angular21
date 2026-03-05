import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="w-64 bg-slate-900 text-slate-200 min-h-screen p-4">

      <!-- Logo -->
      <div class="mb-8">
        <h1 class="text-xl font-bold text-white">
          ISP Admin
        </h1>
        <p class="text-xs text-slate-400">
          Panel de Control
        </p>
      </div>

      <!-- Menú -->
      <nav class="space-y-2">

        <!-- Dashboard -->
        <a
          routerLink="/dashboard"
          routerLinkActive="bg-slate-800 text-white"
          [routerLinkActiveOptions]="{ exact: true }"
          class="block px-4 py-2 rounded-lg hover:bg-slate-800 transition"
        >
          📊 Inicio
        </a>

        <!-- Administración -->
        <div class="mt-4 text-xs uppercase text-slate-400">
          Administración
        </div>

        <a
          routerLink="/dashboard/clientes"
          routerLinkActive="bg-slate-800 text-white"
          class="block px-4 py-2 rounded-lg hover:bg-slate-800 transition"
        >
          👥 Clientes
        </a>

        <a
          routerLink="/dashboard/administracion/equipos"
          routerLinkActive="bg-slate-800 text-white"
          class="block px-4 py-2 rounded-lg hover:bg-slate-800 transition"
        >
          🖥 Equipos
        </a>

        <a
          routerLink="/dashboard/administracion/ingresos"
          routerLinkActive="bg-slate-800 text-white"
          class="block px-4 py-2 rounded-lg hover:bg-slate-800 transition"
        >
          💰 Ingresos
        </a>

      </nav>

    </aside>
  `
})
export class SidebarComponent {}
