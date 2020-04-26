import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import {CheltuialaInputComponent} from "./cheltuiala_input";
import {CardModule, PanelModule, TableModule, TabViewModule, ToolbarModule} from "primeng";
import {FormsModule} from "@angular/forms";
import {CheltuialaApartament} from "cheltuieli/app/cheltuiala-apartament";

@NgModule({
  declarations: [
    AppComponent,
    CheltuialaInputComponent,
    CheltuialaApartament,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    PanelModule,
    TableModule,
    TabViewModule,
    ToolbarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
