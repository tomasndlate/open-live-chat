import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

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

  signUpBtnMobileView = "";
  isSignInVisible: boolean = false;
  isSignUpVisible: boolean = false;

  @Input() user: User = {username: ""}

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {}

  ngOnInit(){
    // this.getUserAuth();
    // this.getUser();
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
    this.eventOpenMobileMenu.emit();
  }

  closeMobileMenu(): void {
    this.eventCloseMobileMenu.emit();
  }

  openProfileMenu(): void {
    this.eventOpenProfileMenu.emit();
  }

  closeProfileMenu(): void {
    this.eventCloseProfileMenu.emit();
  }

  // getUserAuth(){
  //   this.authService.isUserSignedIn.subscribe((userStatus) => {
  //     this.isUserSignedIn = userStatus;
  //   })
  // }

  // getUser(){
  //   this.userService.user.subscribe((userStatus) => {
  //     this.user = userStatus;
  //   })
  // }
}
