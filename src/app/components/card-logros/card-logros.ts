import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-logros',
  imports: [],
  templateUrl: './card-logros.html',
  styleUrl: './card-logros.css'
})
export class CardLogros {
  @Input() titulo:string = '';
  @Input() texto:string = '';
  @Input() anio:string = '';
}
