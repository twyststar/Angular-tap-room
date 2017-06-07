import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-sales',
  templateUrl: './keg-sales.component.html'
})

export class KegSalesComponent {
  @Input() childSalesSelectedKeg: Keg;
  @Output() finalizeButtonClickSender = new EventEmitter();

  finalizeButtonClick(){
    this.finalizeButtonClickSender.emit();
  }

  sellAPint(currentKeg){
    currentKeg.amount = (currentKeg.amount - 1)
  }
  sellAGrowler(currentKeg){
    currentKeg.amount = (currentKeg.amount - 2)
  }
  sellALargeGrowler(currentKeg){
    currentKeg.amount = (currentKeg.amount - 4)
  }
  tapNewKeg(currentKeg){
    currentKeg.amount = 124
  }
}
