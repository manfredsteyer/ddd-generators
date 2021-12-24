import { createAction, props } from '@ngrx/store';
import { Flight } from '../../entities/flight';

export const loadFlight = createAction('[Flight] Load Flight');

export const loadFlightSuccess = createAction(
  '[Flight] Load Flight Success',
  props<{ flight: Flight[] }>()
);

export const loadFlightFailure = createAction(
  '[Flight] Load Flight Failure',
  props<{ error: any }>()
);
