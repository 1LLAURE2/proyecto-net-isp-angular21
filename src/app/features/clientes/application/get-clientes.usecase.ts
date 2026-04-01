import { inject, Injectable } from '@angular/core';
import { ClienteRepositoryImpl } from '../infrastructure/repositories/cliente-repository-impl';
import { Observable } from 'rxjs';
import { ClienteModel } from '../domain/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class GetClientesUseCase {

  private repository = inject(ClienteRepositoryImpl);

  execute(): Observable<ClienteModel[]> {
    return this.repository.getAll();
  }
}
