import {Component, Input} from "@angular/core";
import {InputCheltuiala} from "cheltuieli/app/cheltuiala_input";
import {Apartment, ScaraInfo} from "cheltuieli/app/services/bloc_service";
import {getPriceFor} from "cheltuieli/app/computation";

@Component({
    selector: 'cheltuiala-apartament',
    template: `
        {{price | number:'1.2-2'}}
    `
})
export class CheltuialaApartament {
    @Input()
    input: InputCheltuiala;

    @Input()
    apartament: Apartment;

    @Input()
    totalApartments = 0;

    @Input()
    totalPersons = 0;

    get price(): number {
        return getPriceFor(this.input, this.apartament, this.totalApartments, this.totalPersons);
    }
}