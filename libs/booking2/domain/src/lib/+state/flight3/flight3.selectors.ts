import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FLIGHT3_FEATURE_KEY,
  State,
  Flight3PartialState,
  flight3Adapter,
} from './flight3.reducer';

// Lookup the 'Flight3' feature state managed by NgRx
export const getFlight3State = createFeatureSelector<
  Flight3PartialState,
  State
>(FLIGHT3_FEATURE_KEY);

const { selectAll, selectEntities } = flight3Adapter.getSelectors();

export const getFlight3Loaded = createSelector(
  getFlight3State,
  (state: State) => state.loaded
);

export const getFlight3Error = createSelector(
  getFlight3State,
  (state: State) => state.error
);

export const getAllFlight3 = createSelector(getFlight3State, (state: State) =>
  selectAll(state)
);

export const getFlight3Entities = createSelector(
  getFlight3State,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getFlight3State,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getFlight3Entities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
