import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  username: string = "";
  password: string = "";

  constructor(private router: Router, private authService: AuthService){}

  signUp(){
    this.authService.signIn(this.username, this.password).subscribe({
      next: res => {
        this.router.navigate(['/chat'])
      },
      error: err => {
        console.log(err)
      },
      complete: () => console.log('SignIn completed')
    })
  }

}
