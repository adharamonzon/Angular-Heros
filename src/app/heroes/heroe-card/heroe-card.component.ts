import { Component, Input } from '@angular/core';
import { Heroe, Publisher } from '../interface/interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent {
  
  @Input('heroe') heroe!: Heroe;

}
