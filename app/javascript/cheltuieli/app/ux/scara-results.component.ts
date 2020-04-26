import {Component, Input} from '@angular/core';
import {combineLatest, Observable, ReplaySubject} from "rxjs";
import {Apartment, Scara} from "cheltuieli/app/services/bloc_service";
import {Store} from "@ngrx/store";
import {selectScariEntities} from "cheltuieli/app/state/scara.reducer";
import {filter, map} from "rxjs/internal/operators";
import {selectApartmentEntities} from "cheltuieli/app/state/apartment.reducer";

@Component({
  selector: 'scara-results',
  templateUrl: './scara-results.component.html',
  styleUrls: ['./scara-results.component.scss']
})
export class ScaraResultsComponent {
  private readonly scaraId$ = new ReplaySubject<number>(1);

  private readonly scara$: Observable<Scara>;
  readonly apartments$: Observable<Apartment[]>;

  @Input()
  set scaraId(value: number) {
    this.scaraId$.next(value);
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
  }


}
