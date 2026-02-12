import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const routeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn) {
    console.log('User is logged in, navigating to dashboard');
    return true;
  }
  console.log('User is not logged in, redirecting to login');
  router.navigate(['/login']);
  return false;
};
