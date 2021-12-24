import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BoardingFeatureManageModule } from '@nx-ddd-workspace-generators/boarding/feature-manage';
import { HttpClientModule } from '@angular/common/http';
import { BoardingFeatureCalloutModule } from '@nx-ddd-workspace-generators/boarding/feature-callout';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
    BoardingFeatureManageModule,
    HttpClientModule,
    BoardingFeatureCalloutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
