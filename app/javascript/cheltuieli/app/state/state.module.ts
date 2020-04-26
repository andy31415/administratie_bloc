import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { EffectsModule } from '@ngrx/effects';
import { StartupEffects } from './startup.effects'
import {cheltuieliFeatureKey, reducer as cheltuialaReducer} from "cheltuieli/app/state/cheltuiala.reducer";
import {apartmentsFeatureKey, reducer as apartmentReducer} from "cheltuieli/app/state/apartment.reducer";
import {blocuriFeatureKey, reducer as blocuriReducer} from "cheltuieli/app/state/bloc.reducer";
import {scariFeatureKey, reducer as scariReducer} from "cheltuieli/app/state/scara.reducer";
import {ApartmentEffects} from "cheltuieli/app/state/apartment.effects";

function isDevelopment(): boolean {
  return window['build'] && (window['build'] === 'development');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(apartmentsFeatureKey, apartmentReducer),
    StoreModule.forFeature(blocuriFeatureKey, blocuriReducer),
    StoreModule.forFeature(cheltuieliFeatureKey, cheltuialaReducer),
    StoreModule.forFeature(scariFeatureKey, scariReducer),
    EffectsModule.forRoot([
      ApartmentEffects,
      StartupEffects,
    ]),

    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 50, // Retains last 25 states
      logOnly: !isDevelopment(),
    }),

    EffectsModule.forFeature([StartupEffects]),
  ]
})
export class StateModule { }
