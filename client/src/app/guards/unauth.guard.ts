import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard {
  
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    // Guard only true if user unauthenticated
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/chat']);
      return false;
    } else {
      return true;
    }
  }
  
}
