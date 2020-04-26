import {Component, Input} from "@angular/core";
import {combineLatest, Observable, ReplaySubject} from "rxjs";
import {Store} from "@ngrx/store";
import {selectApartmentEntities} from "cheltuieli/app/state/apartment.reducer";
import {filter, map} from "rxjs/internal/operators";

@Component({
    selector: 'cheltuiala-apartament',
    template: `
        {{price$ | async | number:'1.2-2'}}
    `
})
export class CheltuialaApartament {
    private readonly cheltuialaId$ = new ReplaySubject<number>(1);
    private readonly apartmentId$ = new ReplaySubject<number>(1);
    readonly price$: Observable<number>;

    @Input()
    set cheltuialaId(value: number) {
        this.cheltuialaId$.next(value);
    }

    @Input()
    set apartmentId(value: number) {
        this.apartmentId$.next(value);
    }

    constructor(private readonly store: Store<{}>) {
        this.price$ = combineLatest([this.apartmentId$, this.cheltuialaId$, this.store.select(selectApartmentEntities)]).pipe(
            filter(([a, b, c]) => (a !== undefined) && (b !== undefined) && (c !== undefined)),
            map(([aptId, chId, entities]) => {
                const apt = entities[aptId];
                const ch = apt && apt.cheltuieliValue[chId];
                return ch || 0;
            }),
        );
    }
}