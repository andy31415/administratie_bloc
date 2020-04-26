import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as CheltuialaActions from './cheltuiala.actions';
import {Cheltuiala} from "cheltuieli/app/services/bloc_service";

export const cheltuieliFeatureKey = 'cheltuiali';

export interface State extends EntityState<Cheltuiala> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Cheltuiala> = createEntityAdapter<Cheltuiala>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(CheltuialaActions.addCheltuiala,
    (state, action) => adapter.addOne(action.cheltuiala, state)
  ),
  on(CheltuialaActions.upsertCheltuiala,
    (state, action) => adapter.upsertOne(action.cheltuiala, state)
  ),
  on(CheltuialaActions.addCheltuieli,
    (state, action) => adapter.addMany(action.cheltuieli, state)
  ),
  on(CheltuialaActions.upsertCheltuieli,
    (state, action) => adapter.upsertMany(action.cheltuieli, state)
  ),
  on(CheltuialaActions.updateCheltuiala,
    (state, action) => adapter.updateOne(action.cheltuiala, state)
  ),
  on(CheltuialaActions.updateCheltuieli,
    (state, action) => adapter.updateMany(action.cheltuieli, state)
  ),
  on(CheltuialaActions.deleteCheltuiala,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(CheltuialaActions.deleteCheltuieli,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(CheltuialaActions.loadCheltuieli,
    (state, action) => adapter.setAll(action.cheltuieli, state)
  ),
  on(CheltuialaActions.clearCheltuieli,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
