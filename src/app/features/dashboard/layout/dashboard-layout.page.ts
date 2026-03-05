import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../components/sidebar.component";

@Component({
  standalone: true,
  imports: [RouterModule, SidebarComponent,CommonModule],
  template: `
    <div
      class="flex min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark"
    >

      <!-- Sidebar -->
      <app-sidebar
        [sidebarOpen]="sidebarOpen"
        (closeSidebar)="toggleSidebar()"
      ></app-sidebar>

      <!-- Overlay móvil -->
      <div
        *ngIf="sidebarOpen"
        class="fixed inset-0 bg-black/40 md:hidden"
        (click)="toggleSidebar()"
      ></div>

      <!-- Contenido principal -->
      <main class="flex-1 p-4 md:p-6">

        <!-- Botón hamburguesa mobile -->
        <button
          class="md:hidden mb-4 px-3 py-2 rounded-lg bg-primary text-amber-800"
          (click)="toggleSidebar()"
          aria-label="Abrir menú lateral"
        >
          ☰
        </button>

        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class DashboardLayoutPage {
  sidebarOpen = false

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen
  }
}
