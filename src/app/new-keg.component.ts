import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  templateUrl: './new-keg.component.html'
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  
  submitForm(name: string, brand: string, price: number, alcContent: string){
    var newKegToAdd: Keg = new Keg(name, brand, price, alcContent);
    this.newKegSender.emit(newKegToAdd);
  }

}
