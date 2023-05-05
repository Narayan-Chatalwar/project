import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileImgUrl:any ="";

  profileDetails:any;
  current:any;
  editMode:boolean=false;
  profileEditForm!:FormGroup;
  allUsers:any=[];
  crrIndex:any=0;

  constructor(private formBuilder:FormBuilder,private userservice:UserserviceService ){}


  ngOnInit():void{

    const allusers:any= localStorage.getItem('signUpUsers');
    this.allUsers=JSON.parse(allusers);
   
    this.userservice.getUser().subscribe(value=>this.profileDetails=value);

    console.log(this.profileDetails,'profileDetails initial');
    
    this.profileEditForm = this.formBuilder.group({
      firstname:[this.profileDetails.firstname,[Validators.required]],
      lastname:[this.profileDetails.lastname,[Validators.required]],
      username:[this.profileDetails.username,[Validators.required]],
      mobile:[this.profileDetails.mobile,[Validators.required]],
      password:[this.profileDetails.password,[Validators.required]],
      profileImg:[this.profileDetails.profileImg ,[Validators.required]]
    })
    
  }

  //image upload
  imgUpload(e:any){
    
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    
    reader.onload = (event:any)=>{
      this.profileImgUrl = event.target.result;
      // console.log(event.target.result,'resulturl');
      
    }
    // console.log(this.profileImgUrl,'profileImgUrl');
    
  }

  editProfile(){
    this.editMode = true;
  }
  closeEditProfile(){
    this.profileImgUrl="";
    this.editMode = false;
    this.ngOnInit();
  }

  get getValue():any{
    return this.profileEditForm.controls;
  }

  handleProfileSave(){
    this.profileEditForm = this.formBuilder.group({
      firstname:[this.getValue.firstname.value,[Validators.required]],
      lastname:[this.getValue.lastname.value,[Validators.required]],
      username:[this.getValue.username.value,[Validators.required]],
      mobile:[this.getValue.mobile.value,[Validators.required]],
      password:[this.getValue.password.value,[Validators.required]],
      profileImg:[this.profileImgUrl ? this.profileImgUrl : this.profileDetails.profileImg]
    })

    this.allUsers.map((el:any,index:any)=>{
      if(el.username===this.getValue.username.value){
        this.crrIndex=index;
      }
    })

    
    
    const profileObj=[{
      firstname:this.getValue.firstname.value,
      lastname:this.getValue.lastname.value,
      username:this.getValue.username.value,
      mobile:this.getValue.mobile.value,
      password:this.getValue.password.value,
      profileImg:this.profileImgUrl ? this.profileImgUrl : this.profileDetails.profileImg
    }];

    if(this.crrIndex){
    this.allUsers[this.crrIndex]={
      firstname:this.getValue.firstname.value,
      lastname:this.getValue.lastname.value,
      username:this.getValue.username.value,
      mobile:this.getValue.mobile.value,
      password:this.getValue.password.value,
      profileImg:this.profileImgUrl ? this.profileImgUrl : this.profileDetails.profileImg
    };
    }
    localStorage.setItem('signUpUsers',JSON.stringify(this.allUsers));
    this.userservice.setUser(profileObj);
    this.editMode = false;
  }

}
