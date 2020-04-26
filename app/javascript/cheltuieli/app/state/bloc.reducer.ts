import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as BlocActions from './bloc.actions';
import {Bloc} from "cheltuieli/app/services/bloc_service";

export const blocuriFeatureKey = 'blocuri';

export interface State {
  bloc?: Bloc;
}


export const initialState: State = {}


export const reducer = createReducer(
  initialState,
  on(BlocActions.setBloc,
    (_, action) => ({bloc: action.bloc})
  ),
);

export const selectBlocState = createFeatureSelector<State>(blocuriFeatureKey);
export const selectBloc = createSelector(selectBlocState, state => state.bloc);
