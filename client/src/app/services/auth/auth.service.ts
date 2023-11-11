import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { setToken, getToken, removeToken } from '../../utils/tokenUtils';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/authentication'

  constructor(private http: HttpClient, private router: Router) { }

  signIn(username: string, password: string): Observable<boolean> {
    const credentials = {username, password}
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(`${this.apiUrl}/signin`, credentials, httpOptions).pipe(
      map((response: any) => {
        const token = response.token;
        if (token) {
          this.setToken(response.token);
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }

  signUp(username: string, password: string): Observable<boolean> {
    const credentials = {username, password}
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    // httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiUrl}/signup`, credentials, httpOptions).pipe(
      map((response: any) => {
        const token = response.token;
        if (token) {
          this.setToken(response.token);
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }

  signOut() {
    removeToken();
    this.router.navigate(['/signin'])
  }

  isSignedIn(): boolean {
    if (getToken()) {
      return true;
    } else {
      return false;
    }
  }

  isSignedOut(): boolean {
    if (getToken()) {
      return false;
    } else {
      return true;
    }
  }
  
  private setToken(token: string){
    setToken(token);
  }

  isAuthenticated(): boolean {
    const token = getToken();
    
    if (!!token){
      return true;
    } else {
      return false
    }
  }
}
