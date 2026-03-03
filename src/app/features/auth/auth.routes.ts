import { Routes } from "@angular/router";
import { AuthRepositoryImpl } from "./infrastructure/auth-repository-impl";
import { LoginUseCase } from "./application/login.usecase";
import { LogoutUseCase } from "./application/logout.usecase";
import { RefreshTokenUseCase } from "./application/refresh-token.usecase";

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    providers: [
      AuthRepositoryImpl,
      LoginUseCase,
      LogoutUseCase,
      RefreshTokenUseCase
    ],
    loadComponent: () =>
      import('./ui/pages/login/login.page')
        .then(m => m.LoginPage)
  }
];
// ng g interface features/auth/domain/user --type=model
// ng g interface features/auth/domain/auth-repository

// ng g service features/auth/application/login --skip-tests
// ng g service features/auth/application/logout --skip-tests
// ng g service features/auth/application/refresh-token --skip-tests

// ng g service features/auth/infrastructure/auth-api --skip-tests
// ng g service features/auth/infrastructure/auth-repository-impl --skip-tests

// ng g component features/auth/ui/pages/login --standalone
