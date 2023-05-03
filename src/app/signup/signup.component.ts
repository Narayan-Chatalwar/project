import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router: Router, private formBuilder:FormBuilder) { }

  signUpUsers:any= [];

  signupDetail!:FormGroup;
  

  params:any=[];


  prevUsers:any=[];

  ngOnInit():void{
    this.signupDetail = this.formBuilder.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      username: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }

  get getValue():any{
    return this.signupDetail.controls;
  }

  handleSignup(){
  if(this.signupDetail && this.signupDetail.value.firstname && this.signupDetail.value.lastname && this.signupDetail.value.username && this.signupDetail.value.password && this.signupDetail.value.mobile){

   this.prevUsers = localStorage.getItem('signUpUsers');
   
   this.params = {
      firstname:this.signupDetail.value.firstname,
      lastname:this.signupDetail.value.lastname,
      username:this.signupDetail.value.username,
      mobile:this.signupDetail.value.mobile,
      password:this.signupDetail.value.password,
    }

    console.log(this.params,'params',this.prevUsers,'prevusers');
    
  

   if(this.prevUsers && this.prevUsers.length===1){
    this.signUpUsers=[JSON.parse(this.prevUsers),this.params];
   }
   if(this.prevUsers && this.prevUsers.length>1){
    this.signUpUsers=[...JSON.parse(this.prevUsers),this.params];
   }
   if(!this.prevUsers){
    this.signUpUsers=[this.params];
   }
  
      localStorage.setItem("signUpUsers",JSON.stringify(this.signUpUsers));
      this.router.navigate(['../login']);
   }else{
    alert('Filds cannot be empty');
   }
      
  }
}
