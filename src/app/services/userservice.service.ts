import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  
  constructor() { }

 

  
  current:any = localStorage.getItem('currentuserDetails')
  userValue = JSON.parse(this.current);
  

  
  private _currentUser = new BehaviorSubject<any>(this.userValue[0])

  _presentUser = this._currentUser.asObservable();

  

  getUser(){
    console.log(this.userValue);
    return this._presentUser;
  }

  setUser(value:any){
    
    localStorage.setItem('currentuserDetails',JSON.stringify(value));
    return this._currentUser.next(value[0]);
  }
  

}
