import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignInRoutes } from './sign-in.routes';
import { SignInComponent } from './sign-in.component';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SignInRoutes)
  ]
})
export class SignInModule { }
