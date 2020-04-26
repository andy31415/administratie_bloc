import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as CheltuialaActions from './cheltuiala.actions';
import {createAction, Store} from "@ngrx/store";
import {debounceTime, map, mapTo, withLatestFrom} from "rxjs/internal/operators";
import {selectAllApartments, selectApartmentEntities} from "cheltuieli/app/state/apartment.reducer";
import {CheltuialaWithValue, selectAllCheltuieli} from "cheltuieli/app/state/cheltuiala.reducer";
import {updateApartments} from "cheltuieli/app/state/apartment.actions";
import {Apartment, Bloc, Scara} from "cheltuieli/app/services/bloc_service";
import {Dictionary} from "@ngrx/entity";
import {combineLatest} from "rxjs";
import {selectBloc} from "cheltuieli/app/state/bloc.reducer";
import {selectAllScari} from "cheltuieli/app/state/scara.reducer";

export const recomputeCosts = createAction('[ApartmentEffects] RecomputeCosts');

// FIXME: use statistics to compute stuff
interface BlocStatistics {
    totalPersoane: number;
    totalApartamente: number
    persoanePeScara: Dictionary<number>;
    apartamentePeScara: Dictionary<number>;
}

function getBlocStatistics(bloc: Bloc, scari: Scara[], apartments: Dictionary<Apartment>): BlocStatistics {
    let totalApartamente = 0;
    let totalPersoane = 0;
    const persoanePeScara: Dictionary<number> = {};
    const apartamentePeScara: Dictionary<number> = {};

    for (let scara of scari) {
        totalApartamente += scara.apartmentIds.length;
        apartamentePeScara[String(scara.id)] = scara.apartmentIds.length;

        const persoane = scara.apartmentIds.reduce((nr, id) => {
            const apt = apartments[id];
            return nr + (apt !== undefined ? apt.persoane : 0);
        }, 0)
        totalPersoane += persoane;
        persoanePeScara[String(scara.id)] = persoane;
    }

    return {
        totalApartamente,
        totalPersoane,
        persoanePeScara,
        apartamentePeScara,
    };
}

function getPriceFor(cheltuiala: CheltuialaWithValue, apartament: Apartment, stats: BlocStatistics): number {
    let cost = NaN;

    if (cheltuiala.tip === "cost_fix_pe_apartament") {
        cost = cheltuiala.value;
    } else if (cheltuiala.tip === "cost_fix_pe_persoana") {
        cost = cheltuiala.value * (apartament.persoane || 0);
    } else if (cheltuiala.tip === "impartit_la_nr_apartamente") {
        cost = cheltuiala.value / stats.totalApartamente;
    } else if (cheltuiala.tip === "impartit_la_nr_persoane") {
        cost = cheltuiala.value * (apartament.persoane || 0) / stats.totalPersoane;
    } else {
        // console.error("Unknown price: %o", cheltuiala.tip);
    }

    if (!isNaN(cost)) {
        cost = Math.ceil(cost * 100) / 100;
    }
    return cost;

}

function getCheltuieli(cheltuieli: CheltuialaWithValue[], apartament: Apartment, stats: BlocStatistics): Dictionary<number> {
    const result = {};

    for (const c of cheltuieli) {
        result[String(c.id)] = getPriceFor(c, apartament, stats);
    }

    return result;
}

@Injectable()
export class ApartmentEffects {
    constructor(
        private readonly store: Store<{}>,
        private readonly actions$: Actions) {
    }

    readonly blocStatistics$ = combineLatest([
        this.store.select(selectBloc),
        this.store.select(selectAllScari),
        this.store.select(selectApartmentEntities),
    ]).pipe(
        map(([bloc, scari, apartments]) => getBlocStatistics(bloc, scari, apartments)),
    );

    cheltuialaUpdateEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CheltuialaActions.updateCheltuialaValue),
            mapTo(recomputeCosts())
        )
    );

    recomputeCosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(recomputeCosts),
            debounceTime(500),
            withLatestFrom(
                combineLatest([
                    this.store.select(selectAllApartments),
                    this.store.select(selectAllCheltuieli),
                    this.blocStatistics$,
                ]).pipe(
                    map(([apartments, cheltuieli, stats]) => ({apartments, cheltuieli, stats})),
                ),
            ),
            map(([_, input]) => input),
            map(input => updateApartments({
                apartments: input.apartments.map(apt => ({
                    id: apt.id,
                    changes: {
                        cheltuieliValue: getCheltuieli(input.cheltuieli, apt, input.stats),
                    }
                })),
            })),
        ));

}
