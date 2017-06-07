import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Arrogant Bastard Ale', 'Stone', 5, '5.5%'),
    new Keg('Fat Tire', 'New Belgium', 4, '5.5%'),
    new Keg('Drunken Monk', 'Anna', 5, '7.5%')
  ];
  editKeg(clickedKeg) {
   this.selectedKeg = clickedKeg;
 }

 finishedEditing() {
   this.selectedKeg = null;
 }

 addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

}
