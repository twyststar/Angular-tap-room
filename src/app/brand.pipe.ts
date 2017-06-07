import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "brand",
  pure: false
})


export class BrandPipe implements PipeTransform {
  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].brand === "New Belgium") {
        output.push(input[i]);
      }
    }
    return output;
  }
}
