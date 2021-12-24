import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SecurityFeatureEnterModule } from '@nx-ddd-workspace-generators/security/feature-enter';
import { HttpClientModule } from '@angular/common/http';
import { SecurityFeatureCheckModule } from '@nx-ddd-workspace-generators/security/feature-check';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
    SecurityFeatureEnterModule,
    HttpClientModule,
    SecurityFeatureCheckModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
