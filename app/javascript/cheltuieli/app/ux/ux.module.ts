import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScaraResultsComponent} from './scara-results.component';
import {TableModule} from "primeng";
import {CheltuialaApartament} from "cheltuieli/app/ux/cheltuiala-apartament";
import {CheltuialaInputComponent} from "cheltuieli/app/ux/cheltuiala_input";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ScaraResultsComponent,
    CheltuialaInputComponent,
    CheltuialaApartament,
  ],
  exports: [
    ScaraResultsComponent,
    CheltuialaInputComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule
  ]
})
export class UxModule {
}
