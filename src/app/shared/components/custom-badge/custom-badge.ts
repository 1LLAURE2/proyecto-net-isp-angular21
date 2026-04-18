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
  @Input() type: 'plan' | 'method' | 'status' | 'category' = 'status';

  getClasses() {

    if (this.type === 'plan') {
      switch (this.value) {
        case 'Premium':
          return 'bg-blue-100 text-blue-600';
        case 'Básico':
          return 'bg-green-100 text-green-600';
        case 'Estándar':
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

    if (this.type === 'method') {
      switch (this.value) {
        case 'transferencia':
          return 'bg-green-100 text-green-700';
        case 'efectivo':
          return 'bg-yellow-100 text-yellow-700';
        case 'yape':
          return 'bg-red-100 text-red-700';
      }
    }

    if (this.type === 'category') {
      switch (this.value.toLowerCase()) {
        case 'servicios':
          return 'bg-blue-100 text-blue-700';
        case 'comida':
          return 'bg-green-100 text-green-700';
        case 'transporte':
          return 'bg-yellow-100 text-yellow-700';
        default:
          return 'bg-gray-100 text-gray-600';
      }
    }

    return 'bg-gray-100 text-gray-600';
  }
}
