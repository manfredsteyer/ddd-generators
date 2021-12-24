import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadFlight } from '../+state/flight/flight.actions';
import * as fromFlight from '../+state/flight/flight.reducer';
import * as FlightSelectors from '../+state/flight/flight.selectors';

@Injectable({ providedIn: 'root' })
export class SearchFacade {
  loaded$ = this.store.pipe(select(FlightSelectors.getFlightLoaded));
  flightList$ = this.store.pipe(select(FlightSelectors.getAllFlight));
  selectedFlight$ = this.store.pipe(select(FlightSelectors.getSelected));

  constructor(private store: Store<fromFlight.FlightPartialState>) {}

  load(): void {
    this.store.dispatch(loadFlight());
  }
}
