import { Component, inject, OnInit, signal } from '@angular/core';
import { GetExpensesUseCase } from '../../../application/use-cases/get-expenses.use-case';
import { CustomPaginacion } from "../../../../../shared/components/custom-paginacion/custom-paginacion";
import { GastosFiltros } from '../../components/gastos-filtros/gastos-filtros';
import { GastosTablaDesktop } from '../../components/gastos-tabla-desktop/gastos-tabla-desktop';
import { CommonModule } from '@angular/common';
import { CustomButton } from "../../../../../shared/components/custom-button/custom-button";
import { GastosFormModal } from "../../components/gastos-form-modal/gastos-form-modal";

@Component({
  selector: 'app-list-gastos',
  imports: [CommonModule, CustomPaginacion, GastosFiltros, GastosTablaDesktop, CustomButton, GastosFormModal],
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

  onCreate(){
    console.log("NUEVO GASTO");
  }

  // MODAL GASTO
  showModal = signal(false);

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  createGasto(formData: FormData) {
    console.log(formData);

    // 🔥 aquí llamas a tu use case de create (luego lo hacemos)
    this.closeModal();
  }
}
