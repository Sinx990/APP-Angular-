import { Component } from '@angular/core';
import { Listadestino } from './listadestino/listadestino';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Listadestino],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] 
})
export class App {
  title = 'APP EN ANGULAR 👻';
}
