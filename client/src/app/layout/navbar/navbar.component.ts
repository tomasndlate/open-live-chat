import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() eventOpenMobileMenu = new EventEmitter<void>();
  @Output() eventCloseMobileMenu = new EventEmitter<void>();
  @Output() eventOpenProfileMenu = new EventEmitter<void>();
  @Output() eventCloseProfileMenu = new EventEmitter<void>();

  @Input() isMobileMenuOpen: boolean = false;
  @Input() isUserSignedIn: boolean = false;
  @Input() isProfileMenuOpen: boolean = false;


  // isSignedIn: boolean = false;

  signUpBtnMobileView = "";
  // isMobileMenuOpen = false;

  isSignInVisible: boolean = false;
  isSignUpVisible: boolean = false;

  // isProfileMenuVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private renderer: Renderer2) {}

  ngOnInit(){
    this.authService.isUserSignedIn.subscribe((userStatus) => {
      this.isUserSignedIn = userStatus;
    })
    this.viewSignUpBtnMobile()
  }

  viewSignUpBtnMobile(){
    // Display Sign Up in mobile - only in sign in page
    this.router.events.subscribe(event => {
      // When route is changed
      if (event instanceof NavigationEnd) {
        const path = window.location.pathname;
        this.signUpBtnMobileView = path == "/signin" ? "" : "nav-sign-up-mobile-view";

        this.isSignInVisible = path == "/signin" ? false : true;
        this.isSignUpVisible = path == "/signup" ? false : true;
      }
    });
  }

  openMobileMenu(): void {
    // this.isMobileMenuOpen = true;
    this.eventOpenMobileMenu.emit();
  }

  closeMobileMenu(): void {
    // this.isMobileMenuOpen = false;
    this.eventCloseMobileMenu.emit();
  }

  openProfileMenu(): void {
    // this.isProfileMenuVisible = true;
    this.eventOpenProfileMenu.emit();
  }

  closeProfileMenu(): void {
    this.eventCloseProfileMenu.emit();
    // this.isProfileMenuVisible = false;
  }
}
