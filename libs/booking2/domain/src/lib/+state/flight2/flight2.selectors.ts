import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FLIGHT2_FEATURE_KEY,
  State,
  Flight2PartialState,
  flight2Adapter,
} from './flight2.reducer';

// Lookup the 'Flight2' feature state managed by NgRx
export const getFlight2State = createFeatureSelector<
  Flight2PartialState,
  State
>(FLIGHT2_FEATURE_KEY);

const { selectAll, selectEntities } = flight2Adapter.getSelectors();

export const getFlight2Loaded = createSelector(
  getFlight2State,
  (state: State) => state.loaded
);

export const getFlight2Error = createSelector(
  getFlight2State,
  (state: State) => state.error
);

export const getAllFlight2 = createSelector(getFlight2State, (state: State) =>
  selectAll(state)
);

export const getFlight2Entities = createSelector(
  getFlight2State,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getFlight2State,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getFlight2Entities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
