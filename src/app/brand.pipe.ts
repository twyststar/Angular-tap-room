import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "brand",
  pure: false
})


export class BrandPipe implements PipeTransform {
  transform(input: Keg[], desiredBrand) {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (desiredBrand === "allBrands"){
        output.push(input[i]);
      }
      else if (input[i].brand === desiredBrand) {
        output.push(input[i]);
      } 
    }
    return output;
  }
}
