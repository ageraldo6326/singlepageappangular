import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImagenes } from './card-imagenes';

describe('CardImagenes', () => {
  let component: CardImagenes;
  let fixture: ComponentFixture<CardImagenes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardImagenes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardImagenes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
