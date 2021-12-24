import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as Flight2Actions from './flight2.actions';
import { Flight2 } from '../../entities/flight2';

export const FLIGHT2_FEATURE_KEY = 'booking2-flight2';

export interface State extends EntityState<Flight2> {
  selectedId?: string | number; // which Flight2 record has been selected
  loaded: boolean; // has the Flight2 list been loaded
  error?: string | null; // last known error (if any)
}

export interface Flight2PartialState {
  readonly [FLIGHT2_FEATURE_KEY]: State;
}

export const flight2Adapter: EntityAdapter<Flight2> =
  createEntityAdapter<Flight2>();

export const initialState: State = flight2Adapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const flight2Reducer = createReducer(
  initialState,
  on(Flight2Actions.loadFlight2, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(Flight2Actions.loadFlight2Success, (state, { flight2 }) =>
    flight2Adapter.upsertMany(flight2, { ...state, loaded: true })
  ),
  on(Flight2Actions.loadFlight2Failure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return flight2Reducer(state, action);
}
