import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() titulo: string = '';
  @Input() nombre: string = '';
  @Input() texto: string = '';
  @Input() image: string = '';
  @Input() edad: string = '';
}
