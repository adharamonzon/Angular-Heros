import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/interface';

@Pipe({
  name: 'image',
  pure: false
})
//el pure al ponerlo en false, cada vez que haya un cambio se va a procesar.
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {   
    if (!heroe.id && !heroe.alt_img) {
      return 'assets/no-image.png'
    } else if (heroe.alt_img) {
      return heroe.alt_img
    } else{
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }
}