import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { User } from 'src/app/models/User';
import { getToken } from 'src/app/utils/tokenUtils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://192.168.1.8:3000/user';

  private emptyUser = {
    username: ""
  }

  private userSubject = new BehaviorSubject<User>(this.emptyUser);
  user: Observable<User> = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getUser();
  }

  private setUser(currentUser: User): void {
    this.userSubject.next(currentUser);
  }

  getUser(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ResponseType': 'json',
        'Authorization': `Bearer ${getToken()}`,
      }),
    };

    return this.http.get<User>(`${this.apiUrl}/get-self-user`, httpOptions).pipe(
      map((response: any) => {
        // console.log(`Service ${response}`)
          const user = {
            username: response.username
          };

          this.setUser(user)
          return user as User;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }

}
