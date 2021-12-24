import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking2DomainModule } from '@nx-ddd-workspace-generators/booking2/domain';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, Booking2DomainModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class Booking2FeatureSearchModule {}
