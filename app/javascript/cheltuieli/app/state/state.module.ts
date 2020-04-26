import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { EffectsModule } from '@ngrx/effects';
import { StartupEffects } from './startup.effects'
import {cheltuieliFeatureKey, reducer as cheltuialaReducer} from "cheltuieli/app/state/cheltuiala.reducer";

function isDevelopment(): boolean {
  return window['build'] && (window['build'] === 'development');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(cheltuieliFeatureKey, cheltuialaReducer),


    EffectsModule.forRoot([
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
