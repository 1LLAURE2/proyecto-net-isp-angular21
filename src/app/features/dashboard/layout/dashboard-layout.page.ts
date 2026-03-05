import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../components/sidebar.component";

@Component({
  standalone: true,
  imports: [RouterModule, SidebarComponent,CommonModule],
  template: `
    <div class="flex min-h-screen"
      [ngStyle]="{'background-color':'var(--bg-color)','color':'var(--text-color)'}">

      <!-- SIDEBAR -->
      <app-sidebar
        [sidebarOpen]="sidebarOpen"
        (closeSidebar)="toggleSidebar()">
      </app-sidebar>

      <!-- OVERLAY MOBILE -->
      <div
        *ngIf="sidebarOpen"
        class="fixed inset-0 md:hidden"
        style="background: rgba(0,0,0,0.4)"
        (click)="toggleSidebar()">
      </div>

      <!-- CONTENIDO -->
      <main class="flex-1 p-4 md:p-6">

        <!-- BOTÓN MOBILE -->
        <button
          class="md:hidden mb-4 px-3 py-2 rounded-lg text-white"
          [ngStyle]="{'background-color':'var(--primary-color)'}"
          (click)="toggleSidebar()"
        >
          ☰ Menu
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
