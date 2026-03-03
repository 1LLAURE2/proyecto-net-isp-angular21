import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../domain/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {

  private readonly baseUrl = `${environment.apiUrl}`; //private readonly baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.baseUrl}/login`, {
      username,
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
