import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserModel } from '../domain/user.model';
import { AuthApiService } from './auth-api.service';
import { AuthToken } from '../domain/auth-token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthRepositoryImpl {

  constructor(private api: AuthApiService) {}

  login(email: string, password: string): Observable<AuthToken> {
    return this.api.login(email, password).pipe(
      tap(response => {
        localStorage.setItem('accessToken', response.token);
        // localStorage.setItem('accessToken', user.accessToken);
        // localStorage.setItem('refreshToken', user.refreshToken);
      })
    );
  }

  refreshToken(refreshToken: string): Observable<UserModel> {
    return this.api.refreshToken(refreshToken);
  }

  logout(): void {
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('refreshToken');
    // return this.api.logout();
    localStorage.removeItem('accessToken');
  }
}
