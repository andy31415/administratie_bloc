import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScaraResultsComponent} from './scara-results.component';
import {TableModule} from "primeng";

@NgModule({
  declarations: [
    ScaraResultsComponent,
  ],
  exports: [
    ScaraResultsComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class UxModule {
}
