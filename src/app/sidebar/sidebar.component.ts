import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeTab:any ='a';
  
  ngOnInit():void{
   
  }

  setTabA():void{
    this.activeTab ='a';
    console.log(this.activeTab,'a clicked');
  }
  setTabB():void{
    this.activeTab='b';
    console.log(this.activeTab,'b clicked');
  }
  setTabC():void{
    this.activeTab='c';
    console.log(this.activeTab,'c clicked');
  }

  
}
