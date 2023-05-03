import { TestBed } from '@angular/core/testing';

import { CardsdataService } from './cardsdata.service';

describe('CardsdataService', () => {
  let service: CardsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
