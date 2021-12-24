import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingDomainModule } from '@nx-ddd-workspace-generators/boarding/domain';
import { CalloutComponent } from './callout.component';

@NgModule({
  imports: [CommonModule, BoardingDomainModule],
  declarations: [CalloutComponent],
  exports: [CalloutComponent],
})
export class BoardingFeatureCalloutModule {}
