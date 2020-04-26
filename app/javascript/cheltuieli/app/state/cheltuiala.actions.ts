import { createAction, props } from '@ngrx/store';
import {Cheltuiala} from "cheltuieli/app/services/bloc_service";

export const loadCheltuieli = createAction(
  '[Cheltuiala/API] Load Cheltuieli',
  props<{ cheltuieli: Cheltuiala[] }>()
);

export const updateCheltuialaValue = createAction(
    '[Cheltuiala/API] UpdateValue',
    props<{ id: number, value: number}>()
);
