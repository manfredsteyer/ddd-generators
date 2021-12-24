import { createAction, props } from '@ngrx/store';
import { Flight2 } from '../../entities/flight2';

export const loadFlight2 = createAction('[Flight2] Load Flight2');

export const loadFlight2Success = createAction(
  '[Flight2] Load Flight2 Success',
  props<{ flight2: Flight2[] }>()
);

export const loadFlight2Failure = createAction(
  '[Flight2] Load Flight2 Failure',
  props<{ error: any }>()
);
