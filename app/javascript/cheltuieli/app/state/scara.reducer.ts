import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ScaraActions from './scara.actions';
import {Scara} from "cheltuieli/app/services/bloc_service";

export const scariFeatureKey = 'scari';

export interface State extends EntityState<Scara> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Scara> = createEntityAdapter<Scara>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(ScaraActions.addScara,
    (state, action) => adapter.addOne(action.scara, state)
  ),
  on(ScaraActions.upsertScara,
    (state, action) => adapter.upsertOne(action.scara, state)
  ),
  on(ScaraActions.addScari,
    (state, action) => adapter.addMany(action.scari, state)
  ),
  on(ScaraActions.upsertScari,
    (state, action) => adapter.upsertMany(action.scari, state)
  ),
  on(ScaraActions.updateScara,
    (state, action) => adapter.updateOne(action.scara, state)
  ),
  on(ScaraActions.updateScari,
    (state, action) => adapter.updateMany(action.scari, state)
  ),
  on(ScaraActions.deleteScara,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ScaraActions.deleteScari,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ScaraActions.loadScari,
    (state, action) => adapter.setAll(action.scari, state)
  ),
  on(ScaraActions.clearScari,
    state => adapter.removeAll(state)
  ),
);


const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectScariState = createFeatureSelector<State>(scariFeatureKey);
export const selectScariEntities = createSelector(selectScariState, selectEntities);
