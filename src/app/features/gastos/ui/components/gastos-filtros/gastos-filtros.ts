import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gastos-filtros',
  imports: [CommonModule, FormsModule],
  templateUrl: './gastos-filtros.html',
  styleUrl: './gastos-filtros.css',
})
export class GastosFiltros {
  @Output() filtersChange = new EventEmitter<any>();

  filters = {
    search: '',
    min_amount: null,
    max_amount: null,
    date_from: '',
    date_to: '',
  };

  applyFilters() {
    this.filtersChange.emit(this.filters);
  }

  reset() {
    this.filters = {
      search: '',
      min_amount: null,
      max_amount: null,
      date_from: '',
      date_to: '',
    };
    this.applyFilters();
  }
}
