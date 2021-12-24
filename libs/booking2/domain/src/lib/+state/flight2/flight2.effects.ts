import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as Flight2Actions from './flight2.actions';
import { Flight2DataService } from '../../infrastructure/flight2.data.service';

@Injectable()
export class Flight2Effects {
  loadFlight2$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Flight2Actions.loadFlight2),
      switchMap((action) =>
        this.flight2DataService.load().pipe(
          map((flight2) => Flight2Actions.loadFlight2Success({ flight2 })),
          catchError((error) =>
            of(Flight2Actions.loadFlight2Failure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private flight2DataService: Flight2DataService
  ) {}
}
