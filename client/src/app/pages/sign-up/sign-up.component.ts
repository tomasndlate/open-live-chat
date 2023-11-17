import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  username: string = "";
  password: string = "";
  confirmPassword: string = "";

  // default | valid | invalid
  usernameStatus: string = "default";
  isUsernameValid: boolean = false;
  wasUsernameValidOnce: boolean = false;
  isUsernameSubmitted: boolean = false;
  // Password details
  patternMinLength = 6;
  patternSymbol = /[!@#$%^&*()_+=]/;
  patternUpperPattern = /[A-Z]/;
  patternNumberPattern = /\d/;
  isPatternLengthValid: boolean = false;
  isPatternSymbolValid: boolean = false;
  isPatternUpperValid: boolean = false;
  isPatternNumberValid: boolean = false;

  // default | valid | invalid
  passwordStatus: string = "default";
  isPassowrdValid: boolean = false;
  confirmPasswordStatus: string = "default";
  isConfirmPasswordValid: boolean = false;

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
    // Reset Confirm Password
    this.confirmPassword = "";
    this.confirmPasswordStatus = "default";
    this.isConfirmPasswordValid = false;

    this.password = value;

    const length = this.handlePatternLength();
    const symbol = this.handlePatternSymbol();
    const upper = this.handlePatternUppercase();
    const number = this.handlePatternNumber();

    this.isPassowrdValid = length && symbol && upper && number;

    if (this.isPassowrdValid){
      this.passwordStatus = "valid";
      this.isPassowrdValid = true;
    } else {
      this.passwordStatus = "default";
      this.isPassowrdValid = false;
    }
  }

  getConfirmPasswordValue(value: string){
    this.confirmPassword = value;

    if (this.confirmPassword === this.password) {
      this.confirmPasswordStatus = "valid";
      this.isConfirmPasswordValid = true;
    } else {
      this.confirmPasswordStatus = "default";
      this.isConfirmPasswordValid = false;
    }
  }

  subtmitUsername(){
    this.isUsernameSubmitted = true;
  }

  changeUsername(){
    this.isUsernameSubmitted = false;
    this.resetStatusPasswords();
  }

  resetStatusPasswords(){
    this.password = "";
    this.confirmPassword = "";
    this.passwordStatus = "default";
    this.isPassowrdValid = false;
    this.confirmPasswordStatus= "default";
    this.isConfirmPasswordValid = false;
    this.isPatternLengthValid = false;
    this.isPatternSymbolValid = false;
    this.isPatternUpperValid = false;
    this.isPatternNumberValid = false;
  }

  handlePatternLength(): boolean{
    if (this.password.length >= this.patternMinLength) {
      this.isPatternLengthValid = true;
    } else {
      this.isPatternLengthValid = false;
    }
    return this.isPatternLengthValid;
  }
  handlePatternSymbol(): boolean{
    if (this.patternSymbol.test(this.password)) {
      this.isPatternSymbolValid = true;
    } else {
      this.isPatternSymbolValid = false;
    }
    return this.isPatternSymbolValid;
  }
  handlePatternUppercase(): boolean{
    if (this.patternUpperPattern.test(this.password)) {
      this.isPatternUpperValid = true;
    } else {
      this.isPatternUpperValid = false;
    }
    return this.isPatternUpperValid;
  }
  handlePatternNumber(): boolean{
    if (this.patternNumberPattern.test(this.password)) {
      this.isPatternNumberValid = true;
    } else {
      this.isPatternNumberValid = false;
    }
    return this.isPatternNumberValid;
  }

}
