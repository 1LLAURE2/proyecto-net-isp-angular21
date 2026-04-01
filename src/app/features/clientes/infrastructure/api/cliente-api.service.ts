import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../../domain/cliente.model';
import { environment } from '../../../../../environments/environment';
import { ApiResponse } from '../../../../shared/models/api-response.model';
import { ClienteApiModel } from '../models/cliente-api.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteApiService {

  private readonly baseUrl = `${environment.apiUrl}/clients`; //'/api/clientes';

  constructor(private http: HttpClient) {

  }

  getAll(params?: HttpParams): Observable<ApiResponse<ClienteApiModel[]>>{
    // return this.http.get<ApiResponse<ClienteApiModel[]>>(this.baseUrl, { params });
    return this.http.get<ApiResponse<ClienteApiModel[]>>(this.baseUrl, { params });
  }

  getById(id: string): Observable<ClienteModel> {
    return this.http.get<ClienteModel>(`${this.baseUrl}/${id}`);
  }

  create(cliente: ClienteModel): Observable<void> {
    return this.http.post<void>(this.baseUrl, cliente);
  }

  update(id: string, cliente: ClienteModel): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, cliente);
  }

}
