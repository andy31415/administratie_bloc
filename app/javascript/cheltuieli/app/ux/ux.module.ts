import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScaraResultsComponent} from './scara-results.component';

@NgModule({
  declarations: [
    ScaraResultsComponent,
  ],
  exports: [
    ScaraResultsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UxModule {
}
