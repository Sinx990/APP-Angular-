import { Component } from '@angular/core';
import { Listadestino } from './listadestino/listadestino';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Listadestino],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']   // ← ojo: plural y array con corchetes
})
export class App {
  title = 'APP EN ANGULAR 👻';
}
