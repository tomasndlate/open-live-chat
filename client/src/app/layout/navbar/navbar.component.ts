import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isSignedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.authService.isUserSignedIn.subscribe((userStatus) => {
      this.isSignedIn = userStatus;
    })
  }
}
