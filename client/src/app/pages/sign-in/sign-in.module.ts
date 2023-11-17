import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutes } from './sign-in.routes';
import { SignInComponent } from './sign-in.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { TextInputComponent } from 'src/app/components/text-input/text-input.component';
// import { PasswordInputComponent } from 'src/app/components/password-input/password-input.component';
import { TextInputModule } from 'src/app/components/text-input/text-input.module';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SignInRoutes),
    TextInputModule
  ]
})
export class SignInModule { }
