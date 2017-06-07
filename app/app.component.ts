import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>My First Angular 2 App</h1>
  <keg-list></keg-list>
  `
})

export class AppComponent {

}
