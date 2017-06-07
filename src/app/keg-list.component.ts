import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html'
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender= new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
