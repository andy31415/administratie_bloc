import { createAction, props } from '@ngrx/store';
import {Apartment, Scara} from "cheltuieli/app/services/bloc_service";
import {Update} from "@ngrx/entity";
import {ApartmentWithChetuliliValues} from "cheltuieli/app/state/apartment.reducer";

export const addApartments = createAction(
  '[Apartment/API] Add Apartments',
  props<{ apartments: Apartment[] }>()
);

export const updateApartments = createAction(
    '[Apartment/API] Update Apartments',
    props<{ apartments: Update<ApartmentWithChetuliliValues>[] }>()
);
