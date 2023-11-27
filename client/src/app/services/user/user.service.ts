import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { User } from 'src/app/models/User';
import { getToken } from 'src/app/utils/tokenUtils';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://192.168.1.5:3000/user';

  private emptyUser = {
    username: ""
  }

  private userSubject = new BehaviorSubject<User>(this.emptyUser);
  userObservable: Observable<User> = this.userSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.isUserLoggedIn.subscribe({
      next: isLogged => {
        if(isLogged) {
          this.updateUser_IfLogged();
        }
      }
    })
  }

  private setUser(newUser: User): void {
    this.userSubject.next(newUser);
  }

  updateUser_IfLogged(): void {
    this.http_getUser().subscribe({
      next: (user) => {
        this.setUser(user)
      },
      error: (error) => {
        console.log(`Update user error - ${error}`)
      },
      complete: () => console.log('Update user if logged - complete')
    })
  }

  http_getUser(): Observable<User> {
    const token = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'json',
        'Authorization': `Bearer ${token}`,
      }),
    };

    return this.http.get<User>(`${this.apiUrl}/get-self-user`, httpOptions).pipe(
      map((response) => {
          const user: User = {
            username: response.username
          };

          // this.setUser(user)
          return user;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }

}
