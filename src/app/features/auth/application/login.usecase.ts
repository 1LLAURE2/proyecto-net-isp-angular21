import { inject, Injectable } from '@angular/core';
import { AuthRepositoryImpl } from '../infrastructure/auth-repository-impl';

@Injectable({
  providedIn: 'root',
})
export class LoginUseCase {

  private repository = inject(AuthRepositoryImpl);

  execute(email: string, password: string) {
    return this.repository.login(email, password);
  }
}
