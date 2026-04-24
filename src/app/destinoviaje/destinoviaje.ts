import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-destinoviaje',
  standalone: true,
  templateUrl: './destinoviaje.html',
  styleUrls: ['./destinoviaje.scss']
})
export class Destinoviaje {
  @Input() nombre!: string;

  @HostBinding('class.list-group-item') itemClass = true; 
}
