import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-badge',
  imports: [CommonModule],
  templateUrl: './custom-badge.html',
  styleUrl: './custom-badge.css',
})
export class CustomBadge {
  @Input() value!: string;
  @Input() type: 'plan' | 'status' = 'status';

  getClasses() {

    if (this.type === 'plan') {
      switch (this.value) {
        case 'premium':
          return 'bg-blue-100 text-blue-600';
        case 'basico':
          return 'bg-green-100 text-green-600';
        case 'estandar':
          return 'bg-yellow-100 text-yellow-600';
      }
    }

    if (this.type === 'status') {
      switch (this.value) {
        case 'activo':
          return 'bg-green-100 text-green-700';
        case 'pendiente':
          return 'bg-yellow-100 text-yellow-700';
        case 'inactivo':
          return 'bg-red-100 text-red-700';
      }
    }

    return 'bg-gray-100 text-gray-600';
  }
}
