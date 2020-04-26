import {Component, Input} from "@angular/core";
import {InputCheltuiala} from "cheltuieli/app/cheltuiala_input";
import {ApartamentInfo, ScaraInfo} from "cheltuieli/app/bloc_service";

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
    apartament: ApartamentInfo;

    @Input()
    totalApartments = 0;

    @Input()
    totalPersons = 0;

    get price(): number {
        if (this.input.definitie.tip === "cost_fix_pe_apartament") {
            return this.input.valoare;
        } else if (this.input.definitie.tip === "cost_fix_pe_persoana") {
            return this.input.valoare * (this.apartament.persoane || 0);
        } else if (this.input.definitie.tip === "impartit_la_nr_apartamente") {
            return this.input.valoare / this.totalApartments;
        } else if (this.input.definitie.tip === "impartit_la_nr_persoane") {
            return this.input.valoare * (this.apartament.persoane || 0) / this.totalPersons;
        } else {
            return NaN;
        }
    }
}