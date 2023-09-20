import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { UserAuthService } from './Services/user-auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuardService implements CanActivate {    
    
    constructor(private router : Router, private authService : UserAuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {        
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
