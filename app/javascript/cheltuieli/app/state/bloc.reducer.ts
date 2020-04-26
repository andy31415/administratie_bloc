import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as BlocActions from './bloc.actions';
import {Bloc} from "cheltuieli/app/services/bloc_service";

export const blocuriFeatureKey = 'blocuri';

export interface State extends EntityState<Bloc> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Bloc> = createEntityAdapter<Bloc>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(BlocActions.addBloc,
    (state, action) => adapter.addOne(action.bloc, state)
  ),
  on(BlocActions.upsertBloc,
    (state, action) => adapter.upsertOne(action.bloc, state)
  ),
  on(BlocActions.addBlocuri,
    (state, action) => adapter.addMany(action.blocuri, state)
  ),
  on(BlocActions.upsertBlocuri,
    (state, action) => adapter.upsertMany(action.blocuri, state)
  ),
  on(BlocActions.updateBloc,
    (state, action) => adapter.updateOne(action.bloc, state)
  ),
  on(BlocActions.updateBlocuri,
    (state, action) => adapter.updateMany(action.blocuri, state)
  ),
  on(BlocActions.deleteBloc,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BlocActions.deleteBlocuri,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BlocActions.loadBlocuri,
    (state, action) => adapter.setAll(action.blocuri, state)
  ),
  on(BlocActions.clearBlocuri,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
