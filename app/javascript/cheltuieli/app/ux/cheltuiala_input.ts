import {Component, Input, OnDestroy} from "@angular/core";
import {Cheltuiala} from "cheltuieli/app/services/bloc_service";
import {Store} from "@ngrx/store";
import {updateCheltuialaValue} from "cheltuieli/app/state/cheltuiala.actions";
import {combineLatest, Observable, ReplaySubject, Subject} from "rxjs";
import {distinctUntilChanged, filter, map, takeUntil, withLatestFrom} from "rxjs/internal/operators";
import {CheltuialaWithValue, selectCheltuieliEntities} from "cheltuieli/app/state/cheltuiala.reducer";

@Component({
    selector: 'cheltuiala-input',
    template: `
        <ng-container *ngIf="(cheltuiala$ | async) as cheltuiala">
            <div class="label"> {{cheltuiala.nume}} </div>
            <div class="ui-inputgroup">
                <span class="ui-inputgroup-addon"><i class="pi pi-tags"></i></span>
                <input type="number" class="cost-input" pInputText placeholder="Cost" 
                       [ngModel]="(cheltuiala$ | async)?.value" (ngModelChange)="updateValue($event)">
                <span class="ui-inputgroup-addon">LEI</span>
            </div>
            <div class="description">
                <ng-container *ngIf="cheltuiala.tip === 'cost_fix_pe_apartament'">
                    Cost pe apartament
                </ng-container>
                <ng-container *ngIf="cheltuiala.tip === 'cost_fix_pe_persoana'">
                    Cost pe persoana
                </ng-container>
                <ng-container *ngIf="cheltuiala.tip === 'impartit_la_nr_apartamente_in_bloc'">
                    Impartit la numar de apartamente (pe bloc)
                </ng-container>
                <ng-container *ngIf="cheltuiala.tip === 'impartit_la_nr_persoane_in_bloc'">
                    Impartit la numar de persoane (pe bloc)
                </ng-container>
                <ng-container *ngIf="cheltuiala.tip === 'impartit_la_nr_apartamente_in_scara'">
                    Impartit la numar de apartamente (pe scara)
                </ng-container>
                <ng-container *ngIf="cheltuiala.tip === 'impartit_la_nr_persoane_in_scara'">
                    Impartit la numar de persoane (pe scara)
                </ng-container>
                <ng-container *ngIf="cheltuiala.tip === 'manual'">
                    Valoare introdusa manual
                </ng-container>
                <ng-container *ngIf="cheltuiala.tip === 'apa'">
                    Pret unitar pe m<sup>3</sup> de apa
                </ng-container>
            </div>
        </ng-container>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: row;
            align-items: baseline;
        }

        .label {
            width: 120px;
        }

        .cost-input {
            text-align: right;
            width: 120px;
        }

        .description {
            margin-left: 16px;
            font-size: smaller;
            color: #999;
        }
    `,]
})
export class CheltuialaInputComponent implements OnDestroy {
    private readonly destroyed$ = new ReplaySubject<void>(1);
    private readonly cheltuialaId$ = new ReplaySubject<number>(1);
    private readonly updateValue$ = new Subject<number>();
    private cheltuiala$: Observable<CheltuialaWithValue>;

    @Input()
    set cheltuialaId(value: number) {
        this.cheltuialaId$.next(value);
    }


    constructor(private readonly store: Store<{}>) {
        this.updateValue$.pipe(
            distinctUntilChanged(),
            withLatestFrom(this.cheltuialaId$, (value, id) => ({id, value})),
            filter(props => props.id !== undefined),
            map(props => updateCheltuialaValue(props)),
            takeUntil(this.destroyed$),
        ).subscribe(action => {
            this.store.dispatch(action);
        });

        this.cheltuiala$ = combineLatest([this.cheltuialaId$, this.store.select(selectCheltuieliEntities)]).pipe(
            filter(([a, b]) => a !== undefined && b !== undefined),
            map(([id, entities]) => entities[id]),
            filter(e => e !== undefined),
            distinctUntilChanged(),
        );
    }

    updateValue(value: number) {
        this.updateValue$.next(value);
    }

    ngOnDestroy() {
        this.destroyed$.next();
    }
}