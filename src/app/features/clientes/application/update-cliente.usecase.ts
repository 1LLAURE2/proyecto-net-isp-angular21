import { inject, Injectable } from '@angular/core';
import { ClienteRepositoryImpl } from '../infrastructure/repositories/cliente-repository-impl';
import { ClienteModel } from '../domain/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class UpdateClienteUseCase {

  private repository = inject(ClienteRepositoryImpl);

  execute(id: string,cliente: ClienteModel){
    return this.repository.update(id,cliente);
  }

}
