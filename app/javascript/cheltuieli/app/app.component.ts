import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {Apartment, Bloc, BlocService, Scara} from "cheltuieli/app/services/bloc_service";
import {combineLatest, Observable, ReplaySubject} from "rxjs";
import {filter, map, shareReplay} from "rxjs/internal/operators";
import {InputCheltuiala} from "cheltuieli/app/ux/cheltuiala_input";
import {getPriceFor} from "cheltuieli/app/computation";
import {Store} from '@ngrx/store';
import {loadStartupData} from "cheltuieli/app/state/startup.effects";
import {selectBlocEntities} from "cheltuieli/app/state/bloc.reducer";
import {selectApartmentEntities} from "cheltuieli/app/state/apartment.reducer";
import {selectScariEntities} from "cheltuieli/app/state/scara.reducer";
import {selectCheltuieliEntities} from "cheltuieli/app/state/cheltuiala.reducer";

@Component({
    selector: 'generate-report-app',
    template: `
        <ng-container *ngIf="blocInfo$ | async as info; else loading">
            <p-toolbar class="toolbar">
                <div class="ui-toolbar-group-left">
                    Genereaza cheltuieli pentru <span class="bloc-address">{{info.address}}</span>
                </div>
            </p-toolbar>
            <div class="content">
                <p-panel header="Costuri" [toggleable]="true"
                         class="costuri-input">
                    <cheltuiala-input *ngFor="let c of (inputCheltuieli$ | async)"
                                      [cheltuiala]="c"></cheltuiala-input>
                </p-panel>

                <p-tabView>
                    <p-tabPanel *ngFor="let scara of (scari$ | async)" [header]="scara.nume">
                        <scara-results [scaraId]="scara.id" [cheltuieli]="inputCheltuieli$ | async"></scara-results>
                    </p-tabPanel>
                </p-tabView>


            </div>
        </ng-container>
        <ng-template #loading>
            <p-toolbar class="toolbar">
                <div class="ui-toolbar-group-left">
                    Loading...
                </div>
            </p-toolbar>
        </ng-template>
    `,
    styles: [
            `
            :host {
                display: flex;
                position: relative;
                flex-direction: column;
                height: 100%;
            }

            .toolbar {
                font-size: x-large;
                color: #ccc;
                flex: 0;
            }

            .content {
                display: flex;
                flex-direction: column;
                margin: 16px 0;
                overflow: auto;
                flex: 1 1 auto;
            }

            .costuri-input {
                margin: 0 auto;
                width: 600px;
            }

            .bloc-address {
                font-weight: bold;
            }

            cheltuiala-input {
                margin: 8px 0;
            }

            .output-line:hover > td {
                background-color: rgba(96, 96, 255, 0.3);
            }
        `,
    ]
})
export class AppComponent implements AfterViewInit {
    readonly blocId$ = new ReplaySubject<number>();
    readonly blocInfo$: Observable<Bloc>;
    readonly scari$: Observable<Scara[]>;

    readonly apartmentCount$: Observable<number>;
    readonly personCount$: Observable<number>;
    readonly inputCheltuieli$: Observable<InputCheltuiala[]>;

    constructor(private readonly element: ElementRef,
                private readonly blocService: BlocService,
                private readonly store: Store<{}>) {

        this.blocInfo$ =
            combineLatest([store.select(selectBlocEntities), this.blocId$]).pipe(
                filter(([a, b]) => !!a && !!b),
                map(([entities, id]) => entities[id]),
                filter(value => !!value),
                shareReplay(1),
            );

        this.scari$ = combineLatest([this.blocInfo$, store.select(selectScariEntities)]).pipe(
            filter(([a, b]) => !!a && !!b),
            map(([bloc, scari]) => bloc.scaraIds.map(id => scari[id]).filter(s => !!s)),
            shareReplay(1),
        );

        this.apartmentCount$ = this.scari$.pipe(
            map(scari => scari.reduce((n, s) => n + s.apartmentIds.length, 0)),
            filter(value => !!value),
            shareReplay(1),
        );

        this.personCount$ = combineLatest([this.scari$, store.select(selectApartmentEntities)]).pipe(
            filter(([a, b]) => !!a && !!b),
            map(([scari, aptEntities]) => {
                const result: Apartment[] = []

                for (const scara of scari) {
                    for (const aptId of scara.apartmentIds) {
                        const apt = aptEntities[aptId];
                        if (!!apt) {
                            result.push(apt);
                        }
                    }
                }

                return result;
            }),
            map(apartments => apartments.reduce((n, a) => n + a.persoane, 0)),
            filter(value => !!value),
            shareReplay(1),
        );

        this.inputCheltuieli$ = combineLatest([this.blocInfo$, this.store.select(selectCheltuieliEntities)]).pipe(
            filter(([a, b]) => !!a && !!b),
            map(([bloc, cheltuieli]) => bloc.cheltuialaIds.map(id => cheltuieli[id])),
            map(cheltuieli => cheltuieli.map(definitie => ({
                definitie,
                valoare: 0,
            }))),
            shareReplay(1),
        );
    }

    ngAfterViewInit() {
        const blocId = Number(this.element.nativeElement.getAttribute('data-bloc-id'));

        this.blocId$.next(blocId);
        this.store.dispatch(loadStartupData({blocId}));
    }

    computeTotal(c: InputCheltuiala, apartments: Apartment[], totalApartamente: number, totalPersoane: number): number {
        if (!c || !totalPersoane || !totalApartamente || !apartments) {
            return NaN;
        }

        let total = 0;

        for (const apt of apartments) {
            const aptPrice = getPriceFor(c, apt, totalApartamente, totalPersoane)
            if (isNaN(aptPrice)) {
                continue;
            }
            total += aptPrice;
        }
        return total;
    }
}
