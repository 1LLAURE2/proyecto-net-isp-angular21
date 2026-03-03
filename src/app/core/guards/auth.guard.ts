import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('accessToken');

  if (token) {
    return true; // Usuario autenticado
  } else {
    router.navigate(['/login']); // Redirige a login
    return false;
  }
};
