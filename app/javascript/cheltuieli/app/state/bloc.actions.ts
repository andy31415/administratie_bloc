import { createAction, props } from '@ngrx/store';
import {Bloc} from "cheltuieli/app/services/bloc_service";

export const setBloc = createAction(
  '[Bloc/API] Add Bloc',
  props<{ bloc: Bloc }>()
);

