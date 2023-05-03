import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  userCredentials?:any={};
  details?:any={};

  
  ngOnInit():void{
    this.details=localStorage.getItem('currentuserDetails');
    
    if(!this.details){
      this.router.navigate(['/login']);
    }
    this.userCredentials=JSON.parse(this.details);
    // console.log(this.userCredentials.username);
    
  }
  handleProfileClick(){
    // alert("profile is clicked")
  }


  handleLogout(){
    localStorage.setItem("currentuserDetails",JSON.stringify({}));
    this.router.navigate(['/login'])
  }

}
