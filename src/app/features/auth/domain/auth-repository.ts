import { Observable } from "rxjs";
import { UserModel } from "./user.model";
import { AuthToken } from "./auth-token.model";

export interface AuthRepository {
  login(email: string, password: string): Observable<AuthToken>;
  //refreshToken(refreshToken: string): Observable<UserModel>;
  logout(): Observable<void>;
}
