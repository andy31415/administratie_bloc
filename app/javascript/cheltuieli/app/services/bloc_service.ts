import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

export interface Cheltuiala {
    id: number;
    nume: string;
    tip: "apa" | "cost_fix_pe_apartament" | "cost_fix_pe_persoana" | "impartit_la_nr_apartamente" | "impartit_la_nr_persoane" | "manual"
}

export interface Apartment {
    id: number;
    titular: string;
    usa: string;
    persoane: number | null;
    balanta: number | null;
}

export interface ScaraInfo {
    id: number;
    nume: string;
    apartamente: Apartment[];
}

export interface BlocReportInfo {
    id: number;
    address: string;
    cheltuieli: Cheltuiala[];
    scari: ScaraInfo[];
}

@Injectable()
export class BlocService {

    constructor(private readonly http: HttpClient) {
    }

    getGenerateReportData(blocId: number): Observable<BlocReportInfo> {
        return this.http.get(`/rapoarte/generate/bloc/${blocId}.json`).pipe(map(reply => {
            return reply["bloc"] as BlocReportInfo;
        }));
    }
}
