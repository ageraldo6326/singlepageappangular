import { Component } from '@angular/core';
import { CardImagenes } from "../card-imagenes/card-imagenes";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  imports: [CardImagenes, CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {
  galeriaFotos: string[] = ['img/galeria/galeria1.jpg', 'img/galeria/galeria2.jpg', 'img/galeria/galeria3.jpg', 'img/galeria/galeria4.jpg'
    , 'img/galeria/galeria5.jpg', 'img/galeria/galeria6.jpg', 'img/galeria/galeria7.jpg', 'img/galeria/galeria8.jpg', 'img/galeria/galeria9.jpg'
  ];
}
