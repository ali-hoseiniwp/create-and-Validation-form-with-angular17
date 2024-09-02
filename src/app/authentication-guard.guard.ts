import { AuthenticationService } from './authentication.service';
import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateFn,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authenticate()) {
      console.log('no access');
      return false;
    }
    return true;
  }

  private authenticate(): boolean {
    // if not login then go to then login
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(AuthenticationGuard).canActivate(next, state);
};
