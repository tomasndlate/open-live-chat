import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSideMenuComponent } from './profile-side-menu.component';



@NgModule({
  declarations: [ProfileSideMenuComponent],
  imports: [
    CommonModule
  ],
  exports:[ProfileSideMenuComponent]
})
export class ProfileSideMenuModule { }
