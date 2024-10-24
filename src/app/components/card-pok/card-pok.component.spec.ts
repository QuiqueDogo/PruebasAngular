import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokComponent } from './card-pok.component';

describe('CardPokComponent', () => {
  let component: CardPokComponent;
  let fixture: ComponentFixture<CardPokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
