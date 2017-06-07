import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
selectedKeg = null;
salesSelectedKeg = null;
  masterKegList: Keg[] = [

    new Keg('Arrogant Bastard Ale', 'Stone', 5, '5.5%', 124),
    new Keg('Fat Tire', 'New Belgium', 4, '5.5%', 124),
    new Keg('Drunken Monk', 'Anna', 5, '7.5%', 124)
  ];
  editKeg(clickedKeg) {
   this.selectedKeg = clickedKeg;
 }
 salesKeg(clickedKeg) {
  this.salesSelectedKeg = clickedKeg;
 }
 finishedEditing() {
   this.selectedKeg = null;
 }
 finishedSales() {
   this.salesSelectedKeg = null;
 }
 addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }


}
