import { inject, Injectable } from '@angular/core';
import { ClienteRepositoryImpl } from '../infrastructure/repositories/cliente-repository-impl';
import { Observable } from 'rxjs';
import { ClienteModel } from '../domain/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class GetClientesUseCase {

  private repository = inject(ClienteRepositoryImpl);

  execute(params?: {
    search?: string;
    status?: string;
    plan_id?: string | number;
    page?: number;
    per_page?: number;
    sort?: string;
    direction?: 'asc' | 'desc';
  }): Observable<{ items: ClienteModel[], total_pages: number }> {
    return this.repository.getAll(params);
  }
}
