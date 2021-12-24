import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinDomainModule } from '@nx-ddd-workspace-generators/checkin/domain';
import { Manage5Component } from './manage5.component';

@NgModule({
  imports: [CommonModule, CheckinDomainModule],
  declarations: [Manage5Component],
  exports: [Manage5Component],
})
export class CheckinFeatureManage5Module {}
