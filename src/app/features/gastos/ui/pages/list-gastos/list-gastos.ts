import { Component, inject, OnInit } from '@angular/core';
import { GetExpensesUseCase } from '../../../application/use-cases/get-expenses.use-case';
import { CustomPaginacion } from "../../../../../shared/components/custom-paginacion/custom-paginacion";
import { GastosFiltros } from '../../components/gastos-filtros/gastos-filtros';
import { GastosTablaDesktop } from '../../components/gastos-tabla-desktop/gastos-tabla-desktop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-gastos',
  imports: [CommonModule,CustomPaginacion, GastosFiltros,GastosTablaDesktop],
  templateUrl: './list-gastos.html',
  styleUrl: './list-gastos.css',
})
export class ListGastos implements OnInit{

  private useCase = inject(GetExpensesUseCase);

  expenses = this.useCase.expenses;
  loading = this.useCase.loading;
  meta = this.useCase.meta;

  ngOnInit(): void {
    this.useCase.execute();
  }

  onFiltersChange(filters: any) {
    this.useCase.updateFilters(filters);
  }

  onPageChange(page: number) {
    this.useCase.changePage(page);
  }

  onSort(field: string) {
    this.useCase.changeSort(field);
  }
}
