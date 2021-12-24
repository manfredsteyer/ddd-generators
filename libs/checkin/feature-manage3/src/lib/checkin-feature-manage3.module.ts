import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinDomainModule } from '@nx-ddd-workspace-generators/checkin/domain';
import { Manage3Component } from './manage3.component';

@NgModule({
  imports: [CommonModule, CheckinDomainModule],
  declarations: [Manage3Component],
  exports: [Manage3Component],
})
export class CheckinFeatureManage3Module {}
