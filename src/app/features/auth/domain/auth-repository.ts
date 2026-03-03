import { Observable } from "rxjs";
import { UserModel } from "./user.model";

export interface AuthRepository {
  login(username: string, password: string): Observable<UserModel>;
  refreshToken(refreshToken: string): Observable<UserModel>;
  logout(): Observable<void>;
}
