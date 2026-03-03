import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserModel } from '../domain/user.model';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthRepositoryImpl {

  constructor(private api: AuthApiService) {}

  login(username: string, password: string): Observable<UserModel> {
    return this.api.login(username, password).pipe(
      tap(user => {
        localStorage.setItem('accessToken', user.accessToken);
        localStorage.setItem('refreshToken', user.refreshToken);
      })
    );
  }

  refreshToken(refreshToken: string): Observable<UserModel> {
    return this.api.refreshToken(refreshToken);
  }

  logout(): Observable<void> {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return this.api.logout();
  }
}
