import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isSignedIn: boolean = false;

  signUpBtnMobileView = "";
  isMobileMenuOpen = false;

  isSignInVisible: boolean = false;
  isSignUpVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    this.authService.isUserSignedIn.subscribe((userStatus) => {
      this.isSignedIn = userStatus;
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

  openMobileMenu(){
    this.isMobileMenuOpen = true;
  }

  closeMobileMenu(){
    this.isMobileMenuOpen = false;
  }
}
