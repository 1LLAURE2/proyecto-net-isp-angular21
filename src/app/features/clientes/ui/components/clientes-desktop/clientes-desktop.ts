import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomPaginacion } from "../../../../../shared/components/custom-paginacion/custom-paginacion";
import { CustomBadge } from "../../../../../shared/components/custom-badge/custom-badge";
import { CustomButton } from "../../../../../shared/components/custom-button/custom-button";
import { ClienteModel } from '../../../domain/cliente.model';

@Component({
  selector: 'app-clientes-desktop',
  imports: [CommonModule, CustomPaginacion, CustomBadge, CustomButton],
  templateUrl: './clientes-desktop.html',
  styleUrl: './clientes-desktop.css',
})
export class ClientesDesktop {
  @Input() clients: ClienteModel[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPagesCount: number = 1;
  @Input() isDarkMode: boolean = false;

  @Output() pageChange = new EventEmitter<number>();

  onPageChange(page: number | string) {
    if (page === '...') return;
    const pageNumber = Number(page);
    if (pageNumber < 1 || pageNumber > this.totalPagesCount) return;
    this.pageChange.emit(pageNumber);
  }
}
