import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from './mobile-menu.component';



@NgModule({
  declarations: [MobileMenuComponent],
  imports: [
    CommonModule
  ],
  exports:[MobileMenuComponent]
})
export class MobileMenuModule { }
