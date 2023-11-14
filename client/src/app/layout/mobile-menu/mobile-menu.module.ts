import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from './mobile-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MobileMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[MobileMenuComponent]
})
export class MobileMenuModule { }
