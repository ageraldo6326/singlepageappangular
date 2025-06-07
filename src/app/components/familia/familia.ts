import { Component } from '@angular/core';
import { Card } from "../card/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-familia',
  imports: [Card, CommonModule],
  templateUrl: './familia.html',
  styleUrl: './familia.css'
})
export class Familia {

  miembrosFamilia = [
  {
    titulo: 'Padre',
    nombre: 'Angel',
    texto: 'Angel es nuestro padre nos ayuda diariamente en nuestras tareas.',
    image: 'img/padre.jpg',
    edad: "47",
  },
  {
    titulo: 'Madre',
    nombre: 'Kelly',
    texto: 'Kelly es nuestra madre siempre nos apoya y es una eterna luchadora.',
    image: 'img/madre.webp',
    edad: "40",
  },
  {
    titulo: 'Hijo',
    nombre: 'Jake',
    texto: 'Jake llena la casa de alegría con sus ocurrencia, siempre aventurero.',
    image: 'img/hijo.webp',
    edad: "10",
  },
  {
    titulo: 'Hija',
    nombre: 'Emma',
    texto: 'La princesa de la casa, siempre dando amor a todos.',
    image: 'img/hija.jpg',
    edad: "8",
  }
];
}
