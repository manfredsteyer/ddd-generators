import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadFlight2 } from '../+state/flight2/flight2.actions';
import * as fromFlight2 from '../+state/flight2/flight2.reducer';
import * as Flight2Selectors from '../+state/flight2/flight2.selectors';

@Injectable({ providedIn: 'root' })
export class Search2Facade {
  loaded$ = this.store.pipe(select(Flight2Selectors.getFlight2Loaded));
  flight2List$ = this.store.pipe(select(Flight2Selectors.getAllFlight2));
  selectedFlight2$ = this.store.pipe(select(Flight2Selectors.getSelected));

  constructor(private store: Store<fromFlight2.Flight2PartialState>) {}

  load(): void {
    this.store.dispatch(loadFlight2());
  }
}
