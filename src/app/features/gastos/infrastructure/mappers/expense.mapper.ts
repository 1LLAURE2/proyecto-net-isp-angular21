import { HttpParams } from '@angular/common/http';
import { Expense } from '../../domain/models/expense.model';
import { ExpenseResponseDto } from '../../application/dto/expense-response.dto';
import { ExpenseFilterDto } from '../../application/dto/expense-filter.dto';

export class ExpenseMapper {

  // 🔹 API → DOMAIN
  static toModel(dto: ExpenseResponseDto): Expense {
    return {
      id: dto.id,
      concept: dto.concept,
      category: dto.category,
      amount: Number(dto.amount),
      expenseDate: new Date(dto.expense_date),
      provider: dto.provider,
      voucher: dto.voucher,
    };
  }

  // 🔹 FILTERS → QUERY PARAMS (🔥 clave)
  static toQueryParams(filters: ExpenseFilterDto): HttpParams {
    let params = new HttpParams();

    if (filters.page) {
      params = params.set('page', filters.page);
    }

    if (filters.per_page) {
      params = params.set('per_page', filters.per_page);
    }

    if (filters.sort) {
      params = params.set('sort', filters.sort);
    }

    // 🔥 filtros tipo Laravel: filter[x]
    Object.entries(filters).forEach(([key, value]) => {
      if (
        value !== undefined &&
        value !== null &&
        value !== '' && // 🔥 evitar vacíos
        !['page', 'per_page', 'sort'].includes(key)
      ) {
        params = params.set(`filter[${key}]`, String(value));
      }
    });

    return params;
  }
}
