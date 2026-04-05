import { Observable } from "rxjs";
import { ClienteModel } from "./cliente.model";

export interface ClienteRepository {
  getAll(params?: {
    search?: string;
    status?: string;
    plan_id?: string | number;
    page?: number;
    per_page?: number;
    sort?: string;
    direction?: 'asc' | 'desc';
  }): Observable<{ items: ClienteModel[], total_pages: number }>;
  getById(id: string): Observable<ClienteModel>;
  create(cliente: ClienteModel): Observable<void>;
  update(id: string, cliente: ClienteModel): Observable<void>;
}
