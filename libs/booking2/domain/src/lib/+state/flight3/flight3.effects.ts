import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as Flight3Actions from './flight3.actions';
import { Flight3DataService } from '../../infrastructure/flight3.data.service';

@Injectable()
export class Flight3Effects {
  loadFlight3$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Flight3Actions.loadFlight3),
      switchMap((action) =>
        this.flight3DataService.load().pipe(
          map((flight3) => Flight3Actions.loadFlight3Success({ flight3 })),
          catchError((error) =>
            of(Flight3Actions.loadFlight3Failure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private flight3DataService: Flight3DataService
  ) {}
}
