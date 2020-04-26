import { createAction, props } from '@ngrx/store';
import {Apartment} from "cheltuieli/app/services/bloc_service";

export const addApartments = createAction(
  '[Apartment/API] Add Apartments',
  props<{ apartments: Apartment[] }>()
);
