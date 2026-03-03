import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../domain/user.model';
import { Observable } from 'rxjs';
import { AuthToken } from '../domain/auth-token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

  private readonly baseUrl = `${environment.apiUrl}`; //private readonly baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.baseUrl}/login`, {
      email,
      password
    });
  }

  refreshToken(refreshToken: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.baseUrl}/refresh`, {
      refreshToken
    });
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/logout`, {});
  }
}
