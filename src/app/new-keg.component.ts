import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  templateUrl: './new-keg.component.html'
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcContent: number){
    var newKegToAdd: Keg = new Keg(name, brand, price, alcContent, 124);
    this.newKegSender.emit(newKegToAdd);
  }

}
