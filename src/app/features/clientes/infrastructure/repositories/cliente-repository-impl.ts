import { Injectable } from '@angular/core';
import { ClienteRepository } from '../../domain/cliente-repository';
import { ClienteApiService } from '../api/cliente-api.service';
import { map, Observable } from 'rxjs';
import { ClienteModel } from '../../domain/cliente.model';
import { ClienteMapper } from '../mappers/cliente.mapper';
import { isApiSuccess } from '../../../../shared/models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteRepositoryImpl implements ClienteRepository {

  constructor(private api: ClienteApiService){}

  getAll(): Observable<ClienteModel[]> {
    return this.api.getAll().pipe(
      map(response => {

        // ✅ Manejo correcto de error
        if (!isApiSuccess(response)) {
          throw new Error(response.message);
        }

        // ✅ Aquí ya NO es null
        return response.data.map(cliente =>
          ClienteMapper.fromApi(cliente)
        );
      })
    );
    // throw new Error('Method not implemented.');
  }
  getById(id: string): Observable<ClienteModel> {
    return this.api.getById(id);
    // throw new Error('Method not implemented.');
  }
  create(cliente: ClienteModel): Observable<void> {
    return this.api.create(cliente);
    // throw new Error('Method not implemented.');
  }
  update(id: string, cliente: ClienteModel): Observable<void> {
    return this.api.update(id, cliente);
    // throw new Error('Method not implemented.');
  }

}
