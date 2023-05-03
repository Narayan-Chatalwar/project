import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileDetails:any;
  current:any;
  ngOnInit():void{
    const current:any = localStorage.getItem('currentuserDetails')
    this.current = JSON.parse(current);
    this.profileDetails= this.current[0];
    console.log(this.profileDetails);
    
  }

}
