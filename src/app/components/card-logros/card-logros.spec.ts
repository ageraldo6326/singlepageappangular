import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLogros } from './card-logros';

describe('CardLogros', () => {
  let component: CardLogros;
  let fixture: ComponentFixture<CardLogros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLogros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLogros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
