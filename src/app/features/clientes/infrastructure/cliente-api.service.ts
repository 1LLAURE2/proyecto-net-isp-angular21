import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../domain/cliente.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteApiService {

  private readonly baseUrl = `${environment.apiUrl}/clientes`; //'/api/clientes';

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<ClienteModel[]>{
    return this.http.get<ClienteModel[]>(this.baseUrl);
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
