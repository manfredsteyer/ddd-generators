import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinDomainModule } from '@nx-ddd-workspace-generators/checkin/domain';
import { Manage2Component } from './manage2.component';

@NgModule({
  imports: [CommonModule, CheckinDomainModule],
  declarations: [Manage2Component],
  exports: [Manage2Component],
})
export class CheckinFeatureManage2Module {}
