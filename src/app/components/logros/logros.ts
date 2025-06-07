import { Component } from '@angular/core';
import { CardLogros } from "../card-logros/card-logros";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logros',
  imports: [CardLogros, CommonModule],
  templateUrl: './logros.html',
  styleUrl: './logros.css'
})
export class Logros {
logrosFamilia = [
  {
    titulo: 'El primer día de Jake en el jardín de niños',
    texto: '¡Nuestro pequeño explorador comenzó su viaje educativo!',
    anio: "2025"
  },
  {
    titulo: 'Viaje familiar a Yellowstone',
    texto: '¡Una increíble aventura explorando juntos las maravillas de la naturaleza!',
    anio: "2024"
  },
  {
    titulo: 'Recital de baile de Emma',
    texto: 'Muy orgullosos del primer gran espectáculo de nuestra talentosa bailarina.',
    anio: "2023"
  },
  {
    titulo: 'Nueva casa familiar',
    texto: 'Nos mudamos a la casa de nuestros sueños con un gran patio trasero para los niños.',
    anio: "2022"
  },
  {
    titulo: 'El nacimiento de Jake',
    texto: 'Nuestra familia se completó con la llegada de nuestro pequeño.',
    anio: "2021"
  }
];
}
