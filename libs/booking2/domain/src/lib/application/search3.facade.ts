import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadFlight3 } from '../+state/flight3/flight3.actions';
import * as fromFlight3 from '../+state/flight3/flight3.reducer';
import * as Flight3Selectors from '../+state/flight3/flight3.selectors';

@Injectable({ providedIn: 'root' })
export class Search3Facade {
  loaded$ = this.store.pipe(select(Flight3Selectors.getFlight3Loaded));
  flight3List$ = this.store.pipe(select(Flight3Selectors.getAllFlight3));
  selectedFlight3$ = this.store.pipe(select(Flight3Selectors.getSelected));

  constructor(private store: Store<fromFlight3.Flight3PartialState>) {}

  load(): void {
    this.store.dispatch(loadFlight3());
  }
}
