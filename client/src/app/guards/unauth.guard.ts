import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard {
  
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>{
    // Guard only true if user unauthenticated
    return this.authService.isUserLoggedIn.pipe(
      map(isLogged => {
        // if logged can't access sign in/up
        if (isLogged) {
          this.router.navigate(['/chat']);
        } 
        return !isLogged 
      }),
      catchError((error) => {
          console.error('Error validating token:', error);
          return of(false);
        })
    )
  }
  
}
