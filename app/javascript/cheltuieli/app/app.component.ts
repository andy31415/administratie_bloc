import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {BlocReportInfo, BlocService} from "cheltuieli/app/bloc_service";
import {Observable, ReplaySubject} from "rxjs";
import {map, shareReplay} from "rxjs/internal/operators";
import {InputCheltuiala} from "cheltuieli/app/cheltuiala_input";

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
                    <p-tabPanel *ngFor="let scara of info.scari" [header]="scara.nume">
                        <p-table [value]="scara.apartamente">
                            <ng-template pTemplate="header">
                                <tr>
                                    <th>Usa</th>
                                    <th>Titular</th>
                                    <th>Apa m<sup>3</sup></th>
                                    <th *ngFor="let c of (inputCheltuieli$ | async)">
                                        {{c.definitie.nume}}
                                    </th>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="body" let-apt>
                                <tr class="output-line">
                                    <td>{{apt.usa}}</td>
                                    <td>{{apt.titular}}</td>
                                    <td>???</td>
                                    <td *ngFor="let c of (inputCheltuieli$ | async)">
                                        <cheltuiala-apartament [input]="c" [apartament]="apt"
                                                               [totalApartments]="apartmentCount$ | async"
                                                               [totalPersons]="personCount$ | async"
                                        >
                                        </cheltuiala-apartament>
                                    </td>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="footer">
                                <tr class="total-line">
                                    <td colspan="2">Total</td>
                                    <td>???</td>
                                    <td *ngFor="let c of (inputCheltuieli$ | async)">
                                        ???
                                    </td>
                                </tr>
                            </ng-template>
                        </p-table>
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
    readonly blocInfo$ = new ReplaySubject<BlocReportInfo>(1);
    readonly inputCheltuieli$: Observable<InputCheltuiala[]> = this.blocInfo$.pipe(
        map(info => info.cheltuieli.map(definitie => ({definitie, valoare: 0}))),
        shareReplay(1),
    );

    readonly apartmentCount$ = this.blocInfo$.pipe(
        map(info =>
            info.scari.reduce((nr, scara) => nr +
                scara.apartamente.reduce((nr, apt) => nr + 1, 0), 0)
        ),
        shareReplay(1),
    )

    readonly personCount$ = this.blocInfo$.pipe(
        map(info =>
            info.scari.reduce((nr, scara) => nr +
                scara.apartamente.reduce((nr, apt) => nr + (apt.persoane || 0), 0), 0)
        ),
        shareReplay(1),
    )

    constructor(private readonly element: ElementRef,
                private readonly blocService: BlocService) {
    }

    ngAfterViewInit() {
        const blocId = Number(this.element.nativeElement.getAttribute('data-bloc-id'));

        this.blocService.getGenerateReportData(blocId).subscribe(this.blocInfo$)
    }
}
