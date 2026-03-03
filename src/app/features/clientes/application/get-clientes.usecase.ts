import { inject, Injectable } from '@angular/core';
import { ClienteRepositoryImpl } from '../infrastructure/cliente-repository-impl';

@Injectable({
  providedIn: 'root',
})
export class GetClientesUseCase {

  private repository = inject(ClienteRepositoryImpl);

  execute(){
    return this.repository.getAll();
  }
}
