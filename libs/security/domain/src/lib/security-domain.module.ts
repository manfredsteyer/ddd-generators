import * as fromPassenger from './+state/passenger/passenger.reducer';
import * as fromTicket from './+state/ticket/ticket.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketEffects } from './+state/ticket/ticket.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PassengerEffects } from './+state/passenger/passenger.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTicket.TICKET_FEATURE_KEY, fromTicket.reducer),
    EffectsModule.forFeature([TicketEffects]),
    StoreModule.forFeature(
      fromPassenger.PASSENGER_FEATURE_KEY,
      fromPassenger.reducer
    ),
    EffectsModule.forFeature([PassengerEffects]),
  ],
})
export class SecurityDomainModule {}
