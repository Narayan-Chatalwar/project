import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from '../loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class LogedInGuard implements CanActivate {
  constructor(private loginService:LoginserviceService, private location:Location, private router : Router){}
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuth = this.loginService.checkIsAuth();
      if(isAuth){
        this.router.navigate(['/admin/componenta'])
        // alert('You are already loged in ...')
      return false;
    }
    return true;
  }
  
}
