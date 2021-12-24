import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityDomainModule } from '@nx-ddd-workspace-generators/security/domain';
import { CheckComponent } from './check.component';

@NgModule({
  imports: [CommonModule, SecurityDomainModule],
  declarations: [CheckComponent],
  exports: [CheckComponent],
})
export class SecurityFeatureCheckModule {}
