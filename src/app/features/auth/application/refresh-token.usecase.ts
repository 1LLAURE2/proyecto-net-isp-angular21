import { inject, Injectable } from '@angular/core';
import { AuthRepositoryImpl } from '../infrastructure/auth-repository-impl';

@Injectable({
  providedIn: 'root',
})
export class RefreshTokenUseCase {

  private repository = inject(AuthRepositoryImpl);

  execute(refreshToken: string) {
    return this.repository.refreshToken(refreshToken);
  }
}
