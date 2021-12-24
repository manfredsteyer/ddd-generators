import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@nx-ddd-workspace-generators/luggage/domain';
import { ./checkin.component } from 'CheckinComponent';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
declarations: [./checkin.component],exports: [./checkin.component],})
export class LuggageFeatureCheckinModule {}
