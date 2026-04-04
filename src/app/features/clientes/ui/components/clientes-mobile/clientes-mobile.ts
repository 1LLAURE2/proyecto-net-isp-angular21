import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClienteModel } from '../../../domain/cliente.model';
import { CustomButton } from "../../../../../shared/components/custom-button/custom-button";
import { CustomPaginacion } from "../../../../../shared/components/custom-paginacion/custom-paginacion";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes-mobile',
  standalone: true,
  imports: [CommonModule,CustomButton, CustomPaginacion],
  templateUrl: './clientes-mobile.html',
  styleUrls: ['./clientes-mobile.css'],
})
export class ClientesMobile {

  @Input() clients: any[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPagesCount: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  onPageChange(page: number | string) {
    if (page === '...') return;
    const pageNumber = Number(page);
    if (pageNumber < 1 || pageNumber > this.totalPagesCount) return;
    this.pageChange.emit(pageNumber);
  }
}
