import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('sono nel guard: ', this.authService.isAuthenticated());
    const user = localStorage.getItem('user')
    if (user ) {
      console.log('autenticato');
      console.log(this.canActivate);
      return true;
    } else {
      // Redirect the user to the login page
      return this.router.parseUrl('/404');
    }
  }
}



 
















