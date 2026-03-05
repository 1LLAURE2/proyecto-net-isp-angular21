import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  template: `
    <!-- SIDEBAR -->
    <aside
      class="fixed z-40 w-64 min-h-screen p-6
             bg-white dark:bg-[#2C2C2C] text-gray-700 dark:text-gray-200
             border-r border-gray-200 dark:border-gray-700
             flex flex-col justify-between
             transform transition-transform duration-300
             md:static md:translate-x-0
             "
      [class.-translate-x-full]="!sidebarOpen"
      [attr.aria-hidden]="!sidebarOpen ? 'true' : 'false'"
    >
      <div>
        <!-- Logo -->
        <h1 class="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
          ISP Admin
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Panel de Control
        </p>

        <!-- Menú -->
        <nav class="space-y-4">
          <a
            routerLink="/dashboard"
            routerLinkActive="bg-blue-600 text-white rounded-lg"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="close()"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition"
          >
            <span class="text-xl">📊</span>
            <span>Inicio</span>
          </a>

          <div
            class="uppercase text-xs text-gray-400 dark:text-gray-500 font-semibold mt-6 mb-2"
          >
            Administración
          </div>

          <a
            routerLink="/dashboard/clientes"
            routerLinkActive="bg-blue-600 text-white rounded-lg"
            (click)="close()"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition"
          >
            <span class="text-xl">👥</span>
            <span>Clientes</span>
          </a>

          <a
            routerLink="/dashboard/administracion/equipos"
            routerLinkActive="bg-blue-600 text-white rounded-lg"
            (click)="close()"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition"
          >
            <span class="text-xl">🖥</span>
            <span>Equipos</span>
          </a>

          <a
            routerLink="/dashboard/administracion/ingresos"
            routerLinkActive="bg-blue-600 text-white rounded-lg"
            (click)="close()"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition"
          >
            <span class="text-xl">💰</span>
            <span>Ingresos</span>
          </a>
        </nav>
      </div>

      <!-- Toggle modo oscuro -->
      <div class="mt-8 px-4 py-2 border-t border-gray-200 dark:border-gray-700">
        <button
          (click)="toggleDarkMode()"
          class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          type="button"
          [attr.aria-pressed]="isDarkMode"
          aria-label="Cambiar modo claro y oscuro"
        >
          <span *ngIf="!isDarkMode">🌙</span>
          <span *ngIf="isDarkMode">☀️</span>
          <span>{{ isDarkMode ? 'Modo Claro' : 'Modo Oscuro' }}</span>
        </button>
      </div>
    </aside>
  `
})
export class SidebarComponent {
  @Input() sidebarOpen = false
  @Output() closeSidebar = new EventEmitter<void>()

  close() {
    this.closeSidebar.emit()
  }
  isDarkMode = false;

  ngOnInit() {
    this.isDarkMode = document.documentElement.classList.contains('dark');
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
