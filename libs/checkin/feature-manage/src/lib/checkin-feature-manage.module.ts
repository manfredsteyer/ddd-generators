import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinDomainModule } from '@nx-ddd-workspace-generators/checkin/domain';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, CheckinDomainModule],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class CheckinFeatureManageModule {}
