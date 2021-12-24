import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityDomainModule } from '@nx-ddd-workspace-generators/security/domain';
import { EnterComponent } from './enter.component';

@NgModule({
  imports: [CommonModule, SecurityDomainModule],
  declarations: [EnterComponent],
  exports: [EnterComponent],
})
export class SecurityFeatureEnterModule {}
