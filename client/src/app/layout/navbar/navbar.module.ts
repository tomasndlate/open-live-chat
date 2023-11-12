import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { MobileMenuOpenBtnComponent } from 'src/app/components/mobile-menu-open-btn/mobile-menu-open-btn.component';
import { MobileMenuCloseBtnComponent } from 'src/app/components/mobile-menu-close-btn/mobile-menu-close-btn.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MobileMenuComponent,
    MobileMenuOpenBtnComponent,
    MobileMenuCloseBtnComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
