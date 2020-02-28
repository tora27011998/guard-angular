import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class RoleGuard implements CanActivate {
  // tslint:disable-next-line: variable-name
  constructor(private _authService: AuthService, private _route: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this._authService.decode();

    if (user.role === next.data.role) {
      return true;
    }

    this._route.navigate(['/404']);
    return false;
  }
}
