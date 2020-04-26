import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BlocService} from "cheltuieli/app/services/bloc_service";
import {Action, createAction, props} from "@ngrx/store";
import {mergeMap} from "rxjs/internal/operators";
import {from} from "rxjs";
import {loadCheltuieli} from "cheltuieli/app/state/cheltuiala.actions";
import {setBloc} from "cheltuieli/app/state/bloc.actions";
import {addScari} from "cheltuieli/app/state/scara.actions";
import {addApartments} from "cheltuieli/app/state/apartment.actions";
import {recomputeCosts} from "cheltuieli/app/state/apartment.effects";

interface StartupDataLoadParameters {
    blocId: number;
}

export const loadStartupData = createAction('[Startup] Load Data', props<StartupDataLoadParameters>());

@Injectable()
export class StartupEffects {

    constructor(private readonly actions$: Actions,
                private readonly blocService: BlocService) {
    }

    initialLoad$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadStartupData),
            mergeMap(action =>
                this.blocService.getGenerateReportData(action.blocId).pipe(
                    mergeMap(data => {
                        const actions: Action[] = [];

                        actions.push(loadCheltuieli({cheltuieli: data.cheltuieli}))

                        actions.push(setBloc({
                            bloc: {
                                id: data.id,
                                address: data.address,
                                cheltuialaIds: data.cheltuieli.map(c => c.id),
                                scaraIds: data.scari.map(s => s.id),
                            }
                        }));

                        actions.push(addScari({
                            scari: data.scari.map(s => ({
                                id: s.id,
                                nume: s.nume,
                                apartmentIds: s.apartamente.map(a => a.id),
                            }))
                        }));

                        for (const scara of data.scari) {
                            actions.push(addApartments({
                                apartments: scara.apartamente.map(a => ({
                                    id: a.id,
                                    scaraId: scara.id,
                                    balanta: a.balanta,
                                    persoane: a.persoane,
                                    titular: a.titular,
                                    usa: a.usa,
                                })),
                            }));
                        }

                        actions.push(recomputeCosts());
                        return from(actions);
                    })
                )
            )));


}
