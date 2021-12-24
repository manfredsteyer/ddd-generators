import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as FlightActions from './flight.actions';
import { Flight } from '../../entities/flight';

export const FLIGHT_FEATURE_KEY = 'booking2-flight';

export interface State extends EntityState<Flight> {
  selectedId?: string | number; // which Flight record has been selected
  loaded: boolean; // has the Flight list been loaded
  error?: string | null; // last known error (if any)
}

export interface FlightPartialState {
  readonly [FLIGHT_FEATURE_KEY]: State;
}

export const flightAdapter: EntityAdapter<Flight> =
  createEntityAdapter<Flight>();

export const initialState: State = flightAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const flightReducer = createReducer(
  initialState,
  on(FlightActions.loadFlight, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(FlightActions.loadFlightSuccess, (state, { flight }) =>
    flightAdapter.upsertMany(flight, { ...state, loaded: true })
  ),
  on(FlightActions.loadFlightFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return flightReducer(state, action);
}
