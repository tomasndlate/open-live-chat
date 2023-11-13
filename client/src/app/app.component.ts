import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobileMenuOpen: boolean = false;
  isUserSignedIn: boolean = false;
  isProfileMenuOpen: boolean = false;

  constructor(private authService: AuthService, private renderer: Renderer2) {}

  ngOnInit(){
    this.getUserAuthStatus();
  }

  getUserAuthStatus(){
    this.authService.isUserSignedIn.subscribe((userStatus) => {
      this.isUserSignedIn = userStatus;
    })
  }

  openMobileMenu(): void {
    console.log("open mobile menu")
    this.isMobileMenuOpen = true;
    this.disableBodyScroll();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.enableBodyScroll();
  }

  openProfileMenu(): void {
    this.isProfileMenuOpen = true;
  }

  closeProfileMenu(): void {
    this.isProfileMenuOpen = false;
  }

  enableBodyScroll() {
    this.renderer.removeClass(document.body, 'no-scroll-body');
  }

  disableBodyScroll() {
    this.renderer.addClass(document.body, 'no-scroll-body');
  }
}
