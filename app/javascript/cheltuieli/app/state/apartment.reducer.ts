import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {createEntityAdapter, Dictionary, EntityAdapter, EntityState} from '@ngrx/entity';
import * as ApartmentActions from './apartment.actions';
import {Apartment} from "cheltuieli/app/services/bloc_service";

export const apartmentsFeatureKey = 'apartments';

export interface ApartmentWithChetuliliValues extends Apartment {
    cheltuieliValue: Dictionary<number>
}

export interface State extends EntityState<ApartmentWithChetuliliValues> {
    // additional entities state properties
}

export const adapter: EntityAdapter<ApartmentWithChetuliliValues> = createEntityAdapter<ApartmentWithChetuliliValues>();

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
});


export const reducer = createReducer(
    initialState,
    on(ApartmentActions.addApartments,
        (state, action) => adapter.addMany(action.apartments.map(apt => ({
            ...apt,
            cheltuieliValue: {},
        })), state)
    ),
    on(ApartmentActions.updateApartments,
        (state, action) => adapter.updateMany(action.apartments, state)
    ),
);


const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

export const selectApartmentState = createFeatureSelector<State>(apartmentsFeatureKey);
export const selectApartmentEntities = createSelector(selectApartmentState, selectEntities);
export const selectAllApartments = createSelector(selectApartmentState, selectAll);
