import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking2DomainModule } from '@nx-ddd-workspace-generators/booking2/domain';
import { Search3Component } from './search3.component';

@NgModule({
  imports: [CommonModule, Booking2DomainModule],
  declarations: [Search3Component],
  exports: [Search3Component],
})
export class Booking2FeatureSearch3Module {}
