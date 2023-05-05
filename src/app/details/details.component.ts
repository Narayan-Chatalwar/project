import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input() details:any='';
  @Output() z:any = new EventEmitter<any>();

  ngOnInit():void{
    // console.log(this.details);
  }


  back(data: any) {
    this.z.emit(data);
  }

}
