import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinDomainModule } from '@nx-ddd-workspace-generators/checkin/domain';
import { Manage4Component } from './manage4.component';

@NgModule({
  imports: [CommonModule, CheckinDomainModule],
  declarations: [Manage4Component],
  exports: [Manage4Component],
})
export class CheckinFeatureManage4Module {}
