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

  // default | valid | invalid | blocked
  usernameStatus: string = "default";
  isUsernameValid: boolean = false;
  wasUsernameValidOnce: boolean = false;
  isUsernameSubmitted: boolean = false;
  isPassowrdValid: boolean = false;

  constructor(private router: Router, private authService: AuthService){}

  signIn(){
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

  getUsernameValue(value: string){
    this.username = value;
    if (this.username.length >= 4) {
      this.wasUsernameValidOnce = true;
      this.isUsernameValid = true;
      this.usernameStatus = "valid";

    } else if (this.username.length < 4 && this.wasUsernameValidOnce) {
      this.isUsernameValid = false;
      this.usernameStatus = "invalid";
    }
  }

  getPasswordValue(value: string){
    this.password = value;
    if (this.password.length >= 1) {
      this.isPassowrdValid = true;
    } else {
      this.isPassowrdValid = false;
    }
  }

  subtmitUsername(){
    this.isUsernameSubmitted = true;
  }

  changeUsername(){
    this.isUsernameSubmitted = false;
    this.password = "";
    this.isPassowrdValid = false;
  }

  test(){
    alert("a")
  }

}
