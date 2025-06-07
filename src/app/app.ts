import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { About } from "./components/about/about";
import { Familia } from "./components/familia/familia";
import { Galeria } from './components/galeria/galeria';
import { Logros } from "./components/logros/logros";
import { Footer } from "./components/footer/footer";
import { Contactos } from "./components/contactos/contactos";

@Component({
  selector: 'app-root',
  imports: [Header, About, Familia, Galeria, Logros, Footer, Contactos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'familia';
}
