import { Inject, Injectable, signal } from '@angular/core';

import { Expense } from '../../domain/models/expense.model';
import { ExpenseFilterDto } from '../dto/expense-filter.dto';
import { ExpenseRepository } from '../../domain/repositories/expense.repository';
import { EXPENSE_REPOSITORY } from '../../domain/repositories/expense.repository.token';

@Injectable({
  providedIn: 'root',
})
export class GetExpensesUseCase {

  // 🔥 estado reactivo
  private expensesSignal = signal<Expense[]>([]);
  private loadingSignal = signal<boolean>(false);

  private metaSignal = signal({
    currentPage: 1,
    lastPage: 1,
    perPage: 10,
    total: 0,
  });

  private filtersSignal = signal<ExpenseFilterDto>({
    page: 1,
    per_page: 10,
    sort: '-expense_date',
  });

  constructor(@Inject(EXPENSE_REPOSITORY) private repository: ExpenseRepository) {}

  // 🔹 getters (readonly)
  expenses = this.expensesSignal.asReadonly();
  loading = this.loadingSignal.asReadonly();
  meta = this.metaSignal.asReadonly();
  filters = this.filtersSignal.asReadonly();

  // 🔥 método principal
  execute() {
    this.loadingSignal.set(true);

    this.repository.getAll(this.filtersSignal())
      .subscribe({
        next: (response) => {
          this.expensesSignal.set(response.data);
          this.metaSignal.set(response.meta);
          this.loadingSignal.set(false);
        },
        error: () => {
          this.loadingSignal.set(false);
        },
      });
  }

  // 🔹 actualizar filtros (merge inteligente)
  updateFilters(filters: Partial<ExpenseFilterDto>) {
    this.filtersSignal.update((current) => ({
      ...current,
      ...filters,
      page: 1, // 🔥 reset página cuando cambias filtros
    }));

    this.execute();
  }

  // 🔹 paginación
  changePage(page: number) {
    this.filtersSignal.update((f) => ({
      ...f,
      page,
    }));

    this.execute();
  }

  // 🔹 ordenar
  changeSort(field: string) {
    const currentSort = this.filtersSignal().sort;

    let newSort = field;

    if (currentSort === field) {
      newSort = `-${field}`;
    } else if (currentSort === `-${field}`) {
      newSort = field;
    }

    this.filtersSignal.update((f) => ({
      ...f,
      sort: newSort,
    }));

    this.execute();
  }

  // 🔹 reset filtros
  resetFilters() {
    this.filtersSignal.set({
      page: 1,
      per_page: 10,
      sort: '-expense_date',
    });

    this.execute();
  }
}
