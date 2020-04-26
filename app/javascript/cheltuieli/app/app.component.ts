import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {BlocReportInfo, BlocService} from "cheltuieli/app/bloc_service";
import {Subject} from "rxjs";

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
                    <cheltuiala-input *ngFor="let c of info.cheltuieli" [cheltuiala]="c"></cheltuiala-input>
                </p-panel>
                
                
                <p-tabView>
                    <p-tabPanel *ngFor="let scara of info.scari" [header]="scara.nume">
                        FIXME: {{scara.apartamente.length}}
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
                width: 500px;
            }

            .bloc-address {
                font-weight: bold;
            }
        `,
    ]
})
export class AppComponent implements AfterViewInit {
    readonly blocInfo$ = new Subject<BlocReportInfo>();

    constructor(private readonly element: ElementRef,
                private readonly blocService: BlocService) {
    }

    ngAfterViewInit() {
        const blocId = Number(this.element.nativeElement.getAttribute('data-bloc-id'));

        this.blocService.getGenerateReportData(blocId).subscribe(this.blocInfo$)
    }
}
