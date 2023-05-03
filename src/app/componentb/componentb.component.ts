import { Component } from '@angular/core';
import { Card } from '../Card';
import { CardsdataService } from '../cardsdata.service';

@Component({
  selector: 'app-componentb',
  templateUrl: './componentb.component.html',
  styleUrls: ['./componentb.component.css']
})
export class ComponentbComponent {

  cards:Card[]=[];

  constructor(private cardsdataService:CardsdataService){}

  ngOnInit():void{
    this.getCards();
  }

  getCards():void{
    this.cardsdataService.getCardsData().subscribe(cards => this.cards = cards);
  }


}
