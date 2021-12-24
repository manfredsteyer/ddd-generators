import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking2DomainModule } from '@nx-ddd-workspace-generators/booking2/domain';
import { Search2Component } from './search2.component';

@NgModule({
  imports: [CommonModule, Booking2DomainModule],
  declarations: [Search2Component],
  exports: [Search2Component],
})
export class Booking2FeatureSearch2Module {}
