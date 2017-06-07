import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html'
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender= new EventEmitter();
  @Output() saleClickSender = new EventEmitter();
  filterByBrand: string = "allBrands";

  onChange(optionFromMenu) {
  this.filterByBrand = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  salesButtonHasBeenClicked(salesKegToEdit: Keg){
    this.saleClickSender.emit(salesKegToEdit)
  }

  priceColor(currentKeg){
    if (currentKeg.price >= 7){
      return "bg-warning";
    } else if (currentKeg.price >= 4) {
      return  "bg-success";
    } else {
      return "bg-info";
    }
  }

  lowWarning(currentKeg){
    if(currentKeg.amount<=10){
      return "bg-danger"
    }
  }
}
