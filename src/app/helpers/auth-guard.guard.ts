import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from '../loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private loginService:LoginserviceService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuth = this.loginService.checkIsAuth();
      console.log(isAuth,"isAuth status");
      
      if (isAuth) {
          // authorised so return true
         
          return true;
      }
          
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login']);
      return false;
  }
  
}
