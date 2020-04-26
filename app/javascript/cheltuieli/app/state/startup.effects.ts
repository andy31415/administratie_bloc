import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BlocService} from "cheltuieli/app/services/bloc_service";
import {createAction, props, Action} from "@ngrx/store";
import {mergeMap} from "rxjs/internal/operators";
import {from} from "rxjs";
import {addCheltuiala, loadCheltuieli} from "cheltuieli/app/state/cheltuiala.actions";

interface StartupDataLoadParameters {
    blocId: number;
}

export const loadStartupData = createAction('[Startup] Load Data', props<StartupDataLoadParameters>());

@Injectable()
export class StartupEffects {

  constructor(private readonly actions$: Actions,
              private readonly blocService: BlocService) {}

  initialLoad$ = createEffect(() =>
      this.actions$.pipe(
          ofType(loadStartupData),
          mergeMap(action =>
              this.blocService.getGenerateReportData(action.blocId).pipe(
                  mergeMap(data => {
                      const actions: Action[] = [];

                      actions.push(loadCheltuieli({cheltuieli: data.cheltuieli}))
                      return from(actions);
                  })
              )
          )));


}
