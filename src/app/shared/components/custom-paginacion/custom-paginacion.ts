import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-paginacion',
  standalone: true,
  imports: [],
  templateUrl: './custom-paginacion.html',
  styleUrls: ['./custom-paginacion.css'],
})
export class CustomPaginacion {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  changePage(page: number | string) {
    if (page === '...') return;

    const pageNumber = Number(page);

    if (pageNumber < 1 || pageNumber > this.totalPages) return;

    this.pageChange.emit(pageNumber);
  }

  getVisiblePages(): (number | string)[] {

    const total = this.totalPages;
    const current = this.currentPage;

    const pages: (number | string)[] = [];

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (current > 4) {
      pages.push('...');
    }

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (current < total - 3) {
      pages.push('...');
    }

    pages.push(total);

    return pages;
  }
}
