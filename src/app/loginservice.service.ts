import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private router:Router) { }

  isAuth:boolean=false;


  checkIsAuth():any{
    
      const currentUser = localStorage.getItem('currentuserDetails');
      const isAuth = currentUser && JSON.parse(currentUser);
      console.log(isAuth,'login service');
      
      if(isAuth.length>0){
        this.isAuth = true;
        return true;
      } else {
        this.isAuth = false;
        return false;

      }
    
  }

}
