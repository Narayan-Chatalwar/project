import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private loginService:LoginserviceService , private formBuilder:FormBuilder) { }

  loginDetail!: FormGroup;


  signUpUsers:any= [];


  prevUsers:any=[];

  isAvailable:any={};

  ngOnInit():void{
    
    this.loginDetail = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    const isAuth = this.loginService.checkIsAuth();
      console.log(isAuth,"isAuth status");
  }

  get getValue():any{
    return this.loginDetail.controls;
  }

  getUserNameErrror():any{
  
    return this.getValue.username.errors.required ? 'Enter user name': '';
  }
  getPasswordErrror():any{
   
    return this.getValue.password.errors.required ? 'Enter password': '';
  }

  handleLogin(){
   
   
   if(this.loginDetail.value.username && this.loginDetail.value.password){
  
    
    this.prevUsers = localStorage.getItem('signUpUsers');
    this.signUpUsers=JSON.parse(this.prevUsers);
    if(this.signUpUsers){
     this.isAvailable=this.signUpUsers.filter((item:any) =>item.username === this.loginDetail.value.username && item.password === this.loginDetail.value.password );
      
      if(this.isAvailable.length===1){
        
        localStorage.setItem("currentuserDetails",JSON.stringify(this.isAvailable));
        this.router.navigate(['/admin/componenta']);
      }
      else{
        alert("Invalid username or password");
      }
    } else{
      alert("There is no user register with this username");
    }

   }
      
  }
}
