import { inject, Injectable } from '@angular/core';
import { ClienteRepositoryImpl } from '../infrastructure/repositories/cliente-repository-impl';
import { ClienteModel } from '../domain/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class CreateClienteUseCase {

  private repository = inject(ClienteRepositoryImpl);

  execute(cliente: ClienteModel){
    return this.repository.create(cliente);
  }
}
