import { Observable } from 'rxjs';
import { Expense } from '../models/expense.model';
import { ExpenseFilterDto } from '../../application/dto/expense-filter.dto';

export interface ExpenseRepository {
  getAll(filters: ExpenseFilterDto): Observable<{
    data: Expense[];
    meta: {
      currentPage: number;
      lastPage: number;
      perPage: number;
      total: number;
    };
  }>;

  getById(id: number): Observable<Expense>;

  create(formData: FormData): Observable<Expense>;

  update(id: number, formData: FormData): Observable<Expense>;

  delete(id: number): Observable<void>;
}
