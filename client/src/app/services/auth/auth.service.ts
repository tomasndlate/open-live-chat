import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  private apiUrl = 'http://192.168.1.8:3000/authentication';

  private isUserLoggedInSubject = new BehaviorSubject<boolean>(false);
  isUserLoggedIn: Observable<boolean> = this.isUserLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {
    // First time called set the user status at the moment
    this.token = localStorage.getItem('authToken');
    this.updateLoggedStatus()
  }

  private setToken(token: string | null){
    if (!!token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
    this.token = token;
  }

  private removeToken(){
    localStorage.removeItem('authToken');
    this.token = null;
  }
  
  private isTokenValid(token: string): Observable<boolean> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'json',
        'Authorization': `Bearer ${token}`,
      }),
    };

    return this.http.get<boolean>(`${this.apiUrl}/validate-token`, httpOptions)
      .pipe(
        map(isTokenValid => {
          if(!isTokenValid){
            this.removeToken()
          }
          return isTokenValid
        }),
        catchError(error => {
          console.error('Error validating token:', error);
          this.removeToken()
          return of(false); // Assuming an error means the token is not valid
        })
      );
  }

  updateLoggedStatus(): void {
    if (!!this.token) {
      this.isTokenValid(this.token).subscribe({
        next: isTokenValid => {
          this.setUserLoggedStatus(isTokenValid);
        },
        error: error => {
          console.error('Error checking token expiration:', error);
          this.setUserLoggedStatus(false);
        },
        complete: () => console.log('Update Logged Status')
      })
    } else {
      this.setUserLoggedStatus(false);
    }
  }
  
  private setUserLoggedStatus(newStatus: boolean): void {
    this.isUserLoggedInSubject.next(newStatus);
  }


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
          this.setUserLoggedStatus(true);
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
          this.setUserLoggedStatus(true);
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
    // this.setToken(null);
    // removeToken();
    this.removeToken()
    this.setUserLoggedStatus(false);
    // this.router.navigate(['/signin'])
  }
}
