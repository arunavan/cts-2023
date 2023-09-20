import { Component } from '@angular/core';
import { UserAuthService } from './Services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  constructor(private authService: UserAuthService, private router: Router){
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
