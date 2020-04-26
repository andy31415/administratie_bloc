import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import {CheltuialaInputComponent} from "./cheltuiala_input";
import {CardModule, PanelModule, TabViewModule, ToolbarModule} from "primeng";

@NgModule({
  declarations: [
    AppComponent,
    CheltuialaInputComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    ToolbarModule,
    PanelModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
