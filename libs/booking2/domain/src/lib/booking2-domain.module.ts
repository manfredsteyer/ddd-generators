;
import { EffectsModule.forFeature([Flight3Effects]) } from '@ngrx/effects';
import { StoreModule.forFeature(fromFlight3.FLIGHT3_FEATURE_KEY, fromFlight3.reducer) } from '@ngrx/store';
import { * as fromFlight3 } from './+state/flight3/flight3.reducer';
import { { Flight3Effects } } from './+state/flight3/flight3.effects';
import { EffectsModule.forFeature([Flight2Effects]) } from '@ngrx/effects';
import { StoreModule.forFeature(fromFlight2.FLIGHT2_FEATURE_KEY, fromFlight2.reducer) } from '@ngrx/store';
import { * as fromFlight2 } from './+state/flight2/flight2.reducer';
import { { Flight2Effects } } from './+state/flight2/flight2.effects';
import { EffectsModule.forFeature([FlightEffects]) } from '@ngrx/effects';
import { StoreModule.forFeature(fromFlight.FLIGHT_FEATURE_KEY, fromFlight.reducer) } from '@ngrx/store';
import { * as fromFlight } from './+state/flight/flight.reducer'import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { { FlightEffects } } from './+state/flight/flight.effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(fromFlight.FLIGHT_FEATURE_KEY, fromFlight.reducer), EffectsModule.forFeature([FlightEffects]), StoreModule.forFeature(fromFlight2.FLIGHT2_FEATURE_KEY, fromFlight2.reducer), EffectsModule.forFeature([Flight2Effects]), StoreModule.forFeature(fromFlight3.FLIGHT3_FEATURE_KEY, fromFlight3.reducer), EffectsModule.forFeature([Flight3Effects])],
})
export class Booking2DomainModule {}
