import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  @Output() childCloseMobileMenu = new EventEmitter<void>();
  @Input() isUserAuthenticated: boolean = true; 

  closeMenu(){
    this.childCloseMobileMenu.emit();
  }
}
