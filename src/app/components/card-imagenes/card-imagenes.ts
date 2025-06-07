import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-imagenes',
  imports: [],
  templateUrl: './card-imagenes.html',
  styleUrl: './card-imagenes.css'
})
export class CardImagenes {

  @Input() image: string = '';
}
