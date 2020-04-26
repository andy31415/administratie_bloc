import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {Scara} from "cheltuieli/app/services/bloc_service";

export const loadScari = createAction(
  '[Scara/API] Load Scari',
  props<{ scari: Scara[] }>()
);

export const addScara = createAction(
  '[Scara/API] Add Scara',
  props<{ scara: Scara }>()
);

export const upsertScara = createAction(
  '[Scara/API] Upsert Scara',
  props<{ scara: Scara }>()
);

export const addScari = createAction(
  '[Scara/API] Add Scari',
  props<{ scari: Scara[] }>()
);

export const upsertScari = createAction(
  '[Scara/API] Upsert Scari',
  props<{ scari: Scara[] }>()
);

export const updateScara = createAction(
  '[Scara/API] Update Scara',
  props<{ scara: Update<Scara> }>()
);

export const updateScari = createAction(
  '[Scara/API] Update Scari',
  props<{ scari: Update<Scara>[] }>()
);

export const deleteScara = createAction(
  '[Scara/API] Delete Scara',
  props<{ id: string }>()
);

export const deleteScari = createAction(
  '[Scara/API] Delete Scari',
  props<{ ids: string[] }>()
);

export const clearScari = createAction(
  '[Scara/API] Clear Scari'
);
