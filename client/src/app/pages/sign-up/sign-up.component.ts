import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  username: string = "";
  password: string = "";

  constructor(private router: Router, private authService: AuthService){}

  signUp(){
    this.authService.signUp(this.username, this.password).subscribe({
      next: res => {
        this.router.navigate(['/chat'])
      },
      error: err => {
        console.log(err)
      },
      complete: () => console.log('SignUp completed')
    })
  }

}
