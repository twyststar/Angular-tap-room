import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegListComponent }  from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import{KegSalesComponent } from './keg-sales.component';
import{ KegHeadingComponent } from './keg-heading.component';
import { BrandPipe } from './brand.pipe';
import { FilterPipe } from './filterPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    EditKegComponent,
    NewKegComponent,
    KegSalesComponent,
    KegHeadingComponent,
    BrandPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
