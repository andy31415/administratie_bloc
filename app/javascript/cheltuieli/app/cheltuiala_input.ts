import {Component, Input} from "@angular/core";
import {CheltuialaInfo} from "cheltuieli/app/bloc_service";

@Component({
    selector: 'cheltuiala-input',
    template: `
      <div class="label"> {{cheltuiala.nume}} </div>
      <div class="ui-inputgroup">
          <span class="ui-inputgroup-addon"><i class="pi pi-tags"></i></span>
          <input type="number" class="cost-input" pInputText placeholder="Cost">
          <span class="ui-inputgroup-addon">LEI</span>
      </div>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: row;
        }
        
        .label {
            width: 200px;
        }
        
        .cost-input {
            text-align: right;
        }
    `,]
})
export class CheltuialaInputComponent {
    @Input()
    cheltuiala: CheltuialaInfo;
}