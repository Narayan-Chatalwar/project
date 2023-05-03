import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from './Card';
import { dummycardsdata } from './mockCardsData';

@Injectable({
  providedIn: 'root'
})

export class CardsdataService {
  

  constructor() { }

  getCardsData():Observable<Card[]>{
    const cardsdata=of(dummycardsdata);
    return cardsdata;
  }

}
