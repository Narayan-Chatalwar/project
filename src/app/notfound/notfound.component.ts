import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  constructor(private location:Location){}

  goback(){
    this.location.back();
  }
}
