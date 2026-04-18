import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ExpenseRepository } from '../../domain/repositories/expense.repository';
import { Expense } from '../../domain/models/expense.model';
import { ExpenseFilterDto } from '../../application/dto/expense-filter.dto';
import { PaginatedResponseDto } from '../../application/dto/paginated-response.dto';
import { ExpenseResponseDto } from '../../application/dto/expense-response.dto';
import { ExpenseMapper } from '../mappers/expense.mapper';

@Injectable({
  providedIn: 'root',
})
export class ExpenseRepositoryImpl implements ExpenseRepository {

  private readonly apiUrl = 'http://localhost:8000/api/expenses';

  constructor(private http: HttpClient) {}

  getAll(filters: ExpenseFilterDto): Observable<{
    data: Expense[];
    meta: {
      currentPage: number;
      lastPage: number;
      perPage: number;
      total: number;
    };
  }> {
    const params = ExpenseMapper.toQueryParams(filters);

    return this.http
      .get<PaginatedResponseDto<ExpenseResponseDto>>(this.apiUrl, { params })
      .pipe(
        map((response) => ({
          data: response.data.map(ExpenseMapper.toModel),
          meta: {
            currentPage: response.meta.current_page,
            lastPage: response.meta.last_page,
            perPage: response.meta.per_page,
            total: response.meta.total,
          },
        }))
      );
  }

  getById(id: number): Observable<Expense> {
    return this.http
      .get<{ data: ExpenseResponseDto }>(`${this.apiUrl}/${id}`)
      .pipe(map((res) => ExpenseMapper.toModel(res.data)));
  }

  create(formData: FormData): Observable<Expense> {
    return this.http
      .post<{ data: ExpenseResponseDto }>(this.apiUrl, formData)
      .pipe(map((res) => ExpenseMapper.toModel(res.data)));
  }

  update(id: number, formData: FormData): Observable<Expense> {
    return this.http
      .post<{ data: ExpenseResponseDto }>(
        `${this.apiUrl}/${id}?_method=PUT`,
        formData
      )
      .pipe(map((res) => ExpenseMapper.toModel(res.data)));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
