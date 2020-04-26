import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlocService} from "./bloc_service";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
      BlocService,
  ]
})
export class ServicesModule { }
