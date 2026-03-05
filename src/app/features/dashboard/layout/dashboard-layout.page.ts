import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../components/sidebar.component";

@Component({
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  template: `
    <div class="flex">

      <app-sidebar></app-sidebar>

      <main class="flex-1 p-6 bg-gray-50">
        <router-outlet></router-outlet>
      </main>

    </div>
  `
})
export class DashboardLayoutPage {}
