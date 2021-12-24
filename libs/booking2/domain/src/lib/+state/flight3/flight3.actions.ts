import { createAction, props } from '@ngrx/store';
import { Flight3 } from '../../entities/flight3';

export const loadFlight3 = createAction('[Flight3] Load Flight3');

export const loadFlight3Success = createAction(
  '[Flight3] Load Flight3 Success',
  props<{ flight3: Flight3[] }>()
);

export const loadFlight3Failure = createAction(
  '[Flight3] Load Flight3 Failure',
  props<{ error: any }>()
);
