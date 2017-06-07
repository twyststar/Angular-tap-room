import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html'
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender= new EventEmitter();

  filterByBrand: string = "allBrands";

  onChange(optionFromMenu) {
  this.filterByBrand = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
