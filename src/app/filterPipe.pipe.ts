import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';


@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Keg[], desiredFilter) {
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
        console.log(input[i])
    }
    if (desiredFilter === "byPrice"){
      output.sort(function(a, b){
        return a.price - b.price;
      })
    } else if  (desiredFilter === "allKegs"){
      return output
    }
    return output;
  }

}
