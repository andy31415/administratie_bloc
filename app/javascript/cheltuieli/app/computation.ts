import {InputCheltuiala} from "cheltuieli/app/ux/cheltuiala_input";
import {Apartment} from "cheltuieli/app/services/bloc_service";

export function getPriceFor(input: InputCheltuiala, apartament: Apartment, totalApartments: number, totalPersons: number): number {
    let cost = NaN;

    if (input.definitie.tip === "cost_fix_pe_apartament") {
        cost = input.valoare;
    } else if (input.definitie.tip === "cost_fix_pe_persoana") {
        cost = input.valoare * (apartament.persoane || 0);
    } else if (input.definitie.tip === "impartit_la_nr_apartamente") {
        cost = input.valoare / totalApartments;
    } else if (input.definitie.tip === "impartit_la_nr_persoane") {
        cost = input.valoare * (apartament.persoane || 0) / totalPersons;
    } else {
        console.error("Unknown price ...");
    }

    cost = Math.ceil(cost * 100) / 100;

    return cost;
}