import { Component, EventEmitter, Output } from '@angular/core';
// import { Clipboard } from '@angular/cdk/clipboard';
import { ClipboardService } from 'ngx-clipboard'
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile-side-menu',
  templateUrl: './profile-side-menu.component.html',
  styleUrls: ['./profile-side-menu.component.scss']
})
export class ProfileSideMenuComponent {

  @Output() childCloseProfileMenu = new EventEmitter<void>();

  copyIcon = "bi-copy"

  constructor(private clipboardService: ClipboardService, private authService: AuthService){}

  signOut(){
    this.authService.signOut();
    this.childCloseProfileMenu.emit();
  }
    
  copyToClipboard() {
    this.clipboardService.copy("aaahh");
    this.copyIcon = "bi-check2 green-check";
    setTimeout( () => { 
      this.copyIcon = "bi-copy";
    }, 5000 );
  }
}
