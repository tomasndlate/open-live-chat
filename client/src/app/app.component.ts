import { Component, Renderer2 } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobileMenuOpen: boolean = false;
  isUserSignedIn: boolean = false;
  isProfileMenuOpen: boolean = false;

  user: User = {username: ""}

  constructor(private authService: AuthService, private userService: UserService, private renderer: Renderer2) {}

  ngOnInit(){
    this.getUserAuthStatus();
  }

  getUserAuthStatus(){
    this.authService.isUserLoggedIn.subscribe({
      next: userStatus => {
        this.isUserSignedIn = userStatus;
        if (userStatus) {
          this.getUser_Observable();
        }
      },
      error: error => {
        console.log(`Get user auth status error - ${error}`)
      },
      complete: () => console.log(`Get user auth status - completed`)
    })
  }

  getUser_Observable(){
    this.userService.userObservable.subscribe({
      next: user => {
        this.user = user;
      },
      error: error => {
        console.log(`Get user if sign in error - ${error}`)
      },
      complete: () => console.log('Get user if sign in - complete')
    })
  }


  openMobileMenu(): void {
    this.isMobileMenuOpen = true;
    this.disableBodyScroll();
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.enableBodyScroll();
  }

  openProfileMenu(): void {
    this.isProfileMenuOpen = true;
    this.disableBodyScroll();
  }

  closeProfileMenu(): void {
    this.isProfileMenuOpen = false;
    this.enableBodyScroll();
  }

  enableBodyScroll() {
    this.renderer.removeClass(document.body, 'no-scroll-body');
  }

  disableBodyScroll() {
    this.renderer.addClass(document.body, 'no-scroll-body');
  }
}
