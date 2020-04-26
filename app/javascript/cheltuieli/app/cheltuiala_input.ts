import {Component, Input} from "@angular/core";
import {CheltuialaInfo} from "cheltuieli/app/bloc_service";

@Component({
    selector: 'cheltuiala-input',
    template: `
      <div> {{cheltuiala.nume}} </div>
    `
})
export class CheltuialaInputComponent {
    @Input()
    cheltuiala: CheltuialaInfo;
}