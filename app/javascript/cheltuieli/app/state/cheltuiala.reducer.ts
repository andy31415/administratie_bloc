import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import * as CheltuialaActions from './cheltuiala.actions';
import {Cheltuiala} from "cheltuieli/app/services/bloc_service";

export const cheltuieliFeatureKey = 'cheltuiali';

export interface CheltuialaWithValue extends Cheltuiala {
    value: number;
}

export interface State extends EntityState<CheltuialaWithValue> {
    // additional entities state properties
}

export const adapter: EntityAdapter<CheltuialaWithValue> = createEntityAdapter<CheltuialaWithValue>();

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
});


export const reducer = createReducer(
    initialState,
    on(CheltuialaActions.loadCheltuieli,
        (state, action) => adapter.setAll(action.cheltuieli.map(c => ({...c, value: 0})), state)
    ),
    on(CheltuialaActions.updateCheltuialaValue, (state, action) => adapter.updateOne(
        {
            id: action.id,
            changes: {
                value: action.value,
            }
        }, state)
    ),
);


const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

export const selectCheltuieliState = createFeatureSelector<State>(cheltuieliFeatureKey);
export const selectCheltuieliEntities = createSelector(selectCheltuieliState, selectEntities);
export const selectAllCheltuieli = createSelector(selectCheltuieliState, selectAll);
