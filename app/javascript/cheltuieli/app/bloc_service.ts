import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

export interface CheltuialaInfo {
    nume: string;
    tip: "apa" | "cost_fix_pe_apartament" | "cost_fix_pe_persoana" | "impartit_la_nr_apartamente" | "impartit_la_nr_persoane" | "manual"
}

export interface ApartamentInfo {
    titular: string;
    usa: string;
    persoane: number | null;
    balanta: number | null;
}

export interface ScaraInfo {
    nume: string;
    apartamente: ApartamentInfo[];
}

export interface BlocReportInfo {
    address: string;
    cheltuieli: CheltuialaInfo[];
    scari: ScaraInfo[];
}

@Injectable({providedIn: "root"})
export class BlocService {

    constructor(private readonly http: HttpClient) {
    }

    getGenerateReportData(blocId: number): Observable<BlocReportInfo> {
        return this.http.get(`/rapoarte/generate/bloc/${blocId}.json`).pipe(map(reply => {
            return reply["bloc"] as BlocReportInfo;
        }));
    }
}
