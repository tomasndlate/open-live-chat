import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutes } from './sign-up.routes';
import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';
import { TextInputModule } from 'src/app/components/text-input/text-input.module';



@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SignUpRoutes),
    TextInputModule
  ],
  exports: [SignUpComponent]
})
export class SignUpModule { }
