import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {Bloc} from "cheltuieli/app/services/bloc_service";

export const loadBlocuri = createAction(
  '[Bloc/API] Load Blocuri',
  props<{ blocuri: Bloc[] }>()
);

export const addBloc = createAction(
  '[Bloc/API] Add Bloc',
  props<{ bloc: Bloc }>()
);

export const upsertBloc = createAction(
  '[Bloc/API] Upsert Bloc',
  props<{ bloc: Bloc }>()
);

export const addBlocuri = createAction(
  '[Bloc/API] Add Blocuri',
  props<{ blocuri: Bloc[] }>()
);

export const upsertBlocuri = createAction(
  '[Bloc/API] Upsert Blocuri',
  props<{ blocuri: Bloc[] }>()
);

export const updateBloc = createAction(
  '[Bloc/API] Update Bloc',
  props<{ bloc: Update<Bloc> }>()
);

export const updateBlocuri = createAction(
  '[Bloc/API] Update Blocuri',
  props<{ blocuri: Update<Bloc>[] }>()
);

export const deleteBloc = createAction(
  '[Bloc/API] Delete Bloc',
  props<{ id: string }>()
);

export const deleteBlocuri = createAction(
  '[Bloc/API] Delete Blocuri',
  props<{ ids: string[] }>()
);

export const clearBlocuri = createAction(
  '[Bloc/API] Clear Blocuri'
);
