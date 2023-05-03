import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentcComponent } from './componentc.component';

describe('ComponentcComponent', () => {
  let component: ComponentcComponent;
  let fixture: ComponentFixture<ComponentcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
