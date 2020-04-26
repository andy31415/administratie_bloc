import {Component, Input} from '@angular/core';
import {combineLatest, Observable, ReplaySubject} from "rxjs";
import {Apartment, Cheltuiala, Scara} from "cheltuieli/app/services/bloc_service";
import {Store} from "@ngrx/store";
import {selectScariEntities} from "cheltuieli/app/state/scara.reducer";
import {filter, map} from "rxjs/internal/operators";
import {ApartmentWithChetuliliValues, selectApartmentEntities} from "cheltuieli/app/state/apartment.reducer";


interface TotalCheltuialaCost {
  cheltuiala: Cheltuiala;
  totalValue: number;
}

@Component({
  selector: 'scara-results',
  templateUrl: './scara-results.component.html',
  styleUrls: ['./scara-results.component.scss']
})
export class ScaraResultsComponent {
  private readonly scaraId$ = new ReplaySubject<number>(1);

  private readonly scara$: Observable<Scara>;
  readonly apartments$: Observable<ApartmentWithChetuliliValues[]>;
  readonly cheltuieli$ = new ReplaySubject<Cheltuiala[]>(1);
  readonly costuriTotale$: Observable<TotalCheltuialaCost[]>;

  @Input()
  set scaraId(value: number) {
    this.scaraId$.next(value);
  }

  @Input()
  set cheltuieli(value: Cheltuiala[]) {
    this.cheltuieli$.next(value);
  }

  constructor(private readonly store: Store<{}>) {
    this.scara$ = combineLatest([this.scaraId$, store.select(selectScariEntities)]).pipe(
        filter(([a, b]) => (a !== undefined) && (b !== undefined)),
        map(([id, scari]) => scari[id]),
        filter(scara => !!scara)
    );

    this.apartments$ = combineLatest([this.scara$, store.select(selectApartmentEntities)]).pipe(
        filter(([a, b]) => (a !== undefined) && (b !== undefined)),
        map(([scara, apartments]) => scara.apartmentIds.map(id => apartments[id]).filter(v => !!v))
    );

    this.costuriTotale$ = combineLatest([
        this.cheltuieli$,
        this.apartments$,
    ]).pipe(
        map(([cheltuieli, apartments]) => cheltuieli.map(cheltuiala => ({
          cheltuiala,
          totalValue: apartments.reduce((nr, apt) => {
            const value = apt.cheltuieliValue[cheltuiala.id];
            return nr + (isNaN(value) ? 0 : value);
          }, 0)
        })))
    );
  }


}
