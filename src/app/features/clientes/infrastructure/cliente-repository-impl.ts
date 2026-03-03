import { Injectable } from '@angular/core';
import { ClienteRepository } from '../domain/cliente-repository';
import { ClienteApiService } from './cliente-api.service';
import { Observable } from 'rxjs';
import { ClienteModel } from '../domain/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteRepositoryImpl implements ClienteRepository {

  constructor(private api: ClienteApiService){}

  getAll(): Observable<ClienteModel[]> {
    // return this.api.getAll();
    throw new Error('Method not implemented.');
  }
  getById(id: string): Observable<ClienteModel> {
    // return this.api.getById(id);
    throw new Error('Method not implemented.');
  }
  create(cliente: ClienteModel): Observable<void> {
    // return this.api.create(cliente);
    throw new Error('Method not implemented.');
  }
  update(id: string, cliente: ClienteModel): Observable<void> {
    // return this.api.update(id, cliente);
    throw new Error('Method not implemented.');
  }

}
