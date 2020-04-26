import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';

import {AppComponent} from './app.component';
import {CardModule, PanelModule, TableModule, TabViewModule, ToolbarModule} from "primeng";
import {FormsModule} from "@angular/forms";
import {StateModule} from "cheltuieli/app/state/state.module";
import {ServicesModule} from "cheltuieli/app/services/services.module";
import {UxModule} from "cheltuieli/app/ux/ux.module";

@NgModule({
    declarations: [
        AppComponent,
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

        // Own modules
        ServicesModule,
        StateModule,
        UxModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
