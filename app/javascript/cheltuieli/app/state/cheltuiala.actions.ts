import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {Cheltuiala} from "cheltuieli/app/services/bloc_service";

export const loadCheltuieli = createAction(
  '[Cheltuiala/API] Load Cheltuieli',
  props<{ cheltuieli: Cheltuiala[] }>()
);

export const addCheltuiala = createAction(
  '[Cheltuiala/API] Add Cheltuiala',
  props<{ cheltuiala: Cheltuiala }>()
);

export const upsertCheltuiala = createAction(
  '[Cheltuiala/API] Upsert Cheltuiala',
  props<{ cheltuiala: Cheltuiala }>()
);

export const addCheltuieli = createAction(
  '[Cheltuiala/API] Add Cheltuieli',
  props<{ cheltuieli: Cheltuiala[] }>()
);

export const upsertCheltuieli = createAction(
  '[Cheltuiala/API] Upsert Cheltuieli',
  props<{ cheltuieli: Cheltuiala[] }>()
);

export const updateCheltuiala = createAction(
  '[Cheltuiala/API] Update Cheltuiala',
  props<{ cheltuiala: Update<Cheltuiala> }>()
);

export const updateCheltuieli = createAction(
  '[Cheltuiala/API] Update Cheltuieli',
  props<{ cheltuieli: Update<Cheltuiala>[] }>()
);

export const deleteCheltuiala = createAction(
  '[Cheltuiala/API] Delete Cheltuiala',
  props<{ id: string }>()
);

export const deleteCheltuieli = createAction(
  '[Cheltuiala/API] Delete Cheltuieli',
  props<{ ids: string[] }>()
);

export const clearCheltuieli = createAction(
  '[Cheltuiala/API] Clear Cheltuieli'
);
