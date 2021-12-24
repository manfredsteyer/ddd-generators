import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as Flight3Actions from './flight3.actions';
import { Flight3 } from '../../entities/flight3';

export const FLIGHT3_FEATURE_KEY = 'booking2-flight3';

export interface State extends EntityState<Flight3> {
  selectedId?: string | number; // which Flight3 record has been selected
  loaded: boolean; // has the Flight3 list been loaded
  error?: string | null; // last known error (if any)
}

export interface Flight3PartialState {
  readonly [FLIGHT3_FEATURE_KEY]: State;
}

export const flight3Adapter: EntityAdapter<Flight3> =
  createEntityAdapter<Flight3>();

export const initialState: State = flight3Adapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const flight3Reducer = createReducer(
  initialState,
  on(Flight3Actions.loadFlight3, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(Flight3Actions.loadFlight3Success, (state, { flight3 }) =>
    flight3Adapter.upsertMany(flight3, { ...state, loaded: true })
  ),
  on(Flight3Actions.loadFlight3Failure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return flight3Reducer(state, action);
}
