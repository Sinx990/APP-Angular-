import { Component } from '@angular/core';
import { Destinoviaje } from '../destinoviaje/destinoviaje';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listadestino',
  standalone: true,
  imports: [CommonModule, Destinoviaje],
  templateUrl: './listadestino.html',
  styleUrls: ['./listadestino.scss']
})
export class Listadestino {
  destino: string[];

  constructor() {
    this.destino = ['Roma', 'Tokio', 'Nueva York', 'Colombia'];
  }

  agregar(nombre: string) {
    if (nombre.trim()) {
      this.destino.push(nombre);
    }
  }
}
