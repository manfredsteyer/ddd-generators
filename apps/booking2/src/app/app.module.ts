import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { Booking2FeatureSearchModule } from '@nx-ddd-workspace-generators/booking2/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { Booking2FeatureSearch2Module } from '@nx-ddd-workspace-generators/booking2/feature-search2';
import { Booking2FeatureSearch3Module } from '@nx-ddd-workspace-generators/booking2/feature-search3';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
    Booking2FeatureSearchModule,
    HttpClientModule,
    Booking2FeatureSearch2Module,
    Booking2FeatureSearch3Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
