import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CheckinFeatureManageModule } from '@nx-ddd-workspace-generators/checkin/feature-manage';
import { HttpClientModule } from '@angular/common/http';
import { CheckinFeatureManage2Module } from '@nx-ddd-workspace-generators/checkin/feature-manage2';
import { CheckinFeatureManage3Module } from '@nx-ddd-workspace-generators/checkin/feature-manage3';
import { CheckinFeatureManage4Module } from '@nx-ddd-workspace-generators/checkin/feature-manage4';
import { CheckinFeatureManage5Module } from '@nx-ddd-workspace-generators/checkin/feature-manage5';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    CheckinFeatureManageModule,
    HttpClientModule,
    CheckinFeatureManage2Module,
    HttpClientModule,
    CheckinFeatureManage3Module,
    HttpClientModule,
    CheckinFeatureManage4Module,
    HttpClientModule,
    CheckinFeatureManage5Module,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
