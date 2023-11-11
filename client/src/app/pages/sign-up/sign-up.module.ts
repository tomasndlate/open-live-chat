import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpRoutes } from './sign-up.routes';
import { SignUpComponent } from './sign-up.component';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SignUpRoutes)
  ],
  exports: [SignUpComponent]
})
export class SignUpModule { }
