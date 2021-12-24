import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FLIGHT_FEATURE_KEY,
  State,
  FlightPartialState,
  flightAdapter,
} from './flight.reducer';

// Lookup the 'Flight' feature state managed by NgRx
export const getFlightState = createFeatureSelector<FlightPartialState, State>(
  FLIGHT_FEATURE_KEY
);

const { selectAll, selectEntities } = flightAdapter.getSelectors();

export const getFlightLoaded = createSelector(
  getFlightState,
  (state: State) => state.loaded
);

export const getFlightError = createSelector(
  getFlightState,
  (state: State) => state.error
);

export const getAllFlight = createSelector(getFlightState, (state: State) =>
  selectAll(state)
);

export const getFlightEntities = createSelector(
  getFlightState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getFlightState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getFlightEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
