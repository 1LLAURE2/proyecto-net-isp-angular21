import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Expense } from '../../../domain/models/expense.model';
import { CommonModule } from '@angular/common';
import { CustomBadge } from "../../../../../shared/components/custom-badge/custom-badge";
import { CustomButton } from "../../../../../shared/components/custom-button/custom-button";

@Component({
  selector: 'app-gastos-tabla-desktop',
  imports: [CommonModule, CustomBadge, CustomButton],
  templateUrl: './gastos-tabla-desktop.html',
  styleUrl: './gastos-tabla-desktop.css',
})
export class GastosTablaDesktop {

  @Input() expenses: Expense[] = [];
  @Input() loading = false;

  @Output() sort = new EventEmitter<string>();

  onSort(field: string) {
    this.sort.emit(field);
  }

  onView(id: number){
    console.log('Ver elemento con id:', id);
  }

  onDelete(id: number){
    console.log('Eliminar elemento con id:', id);
  }

  onEdit(id: number) {
    console.log('Editar elemento con id:', id);
  }
}
