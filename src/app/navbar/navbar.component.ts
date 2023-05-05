import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router,private userservice : UserserviceService) { }

  userCredentials?:any={};
  details?:any={};

  
  ngOnInit(){
 
    this.userservice.getUser().subscribe(value=>this.userCredentials=value);
    // console.log(this.userCredentials);
    
    
  }
  


  handleLogout(){
    localStorage.setItem("currentuserDetails",JSON.stringify({}));
    this.router.navigate(['/login'])
  }

}
