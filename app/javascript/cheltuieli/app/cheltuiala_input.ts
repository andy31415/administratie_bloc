import {Component, Input} from "@angular/core";
import {Cheltuiala} from "cheltuieli/app/services/bloc_service";

export interface InputCheltuiala {
    definitie: Cheltuiala;
    valoare: number;
}

@Component({
    selector: 'cheltuiala-input',
    template: `
        <div class="label"> {{cheltuiala.definitie.nume}} </div>
        <div class="ui-inputgroup">
            <span class="ui-inputgroup-addon"><i class="pi pi-tags"></i></span>
            <input type="number" class="cost-input" pInputText placeholder="Cost"
                   [(ngModel)]="cheltuiala.valoare">
            <span class="ui-inputgroup-addon">LEI</span>
        </div>
        <div class="description">
            <ng-container *ngIf="cheltuiala.definitie.tip === 'cost_fix_pe_apartament'">
                Cost pe apartament
            </ng-container>
            <ng-container *ngIf="cheltuiala.definitie.tip === 'cost_fix_pe_persoana'">
                Cost pe persoana
            </ng-container>
            <ng-container *ngIf="cheltuiala.definitie.tip === 'impartit_la_nr_apartamente'">
                Impartit la numar de apartamente
            </ng-container>
            <ng-container *ngIf="cheltuiala.definitie.tip === 'impartit_la_nr_persoane'">
                Impartit la numar de persoane
            </ng-container>
            <ng-container *ngIf="cheltuiala.definitie.tip === 'manual'">
                Valoare introdusa manual
            </ng-container>
            <ng-container *ngIf="cheltuiala.definitie.tip === 'apa'">
                Pret unitar pe m<sup>3</sup> de apa
            </ng-container>
        </div>
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
export class CheltuialaInputComponent {
    @Input()
    cheltuiala: InputCheltuiala;
}