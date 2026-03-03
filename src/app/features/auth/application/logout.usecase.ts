import { inject, Injectable } from '@angular/core';
import { AuthRepositoryImpl } from '../infrastructure/auth-repository-impl';

@Injectable({
  providedIn: 'root',
})
export class LogoutUseCase {

  private repository = inject(AuthRepositoryImpl);

  execute() {
    return this.repository.logout();
  }
}
