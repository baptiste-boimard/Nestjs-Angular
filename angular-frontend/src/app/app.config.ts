import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { loadDataFromServiceB$ } from './store/external-data.effects';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { externalDataReducer } from './store/external-data.reducer';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideStore({ externalData: externalDataReducer}),
    provideEffects({ loadDataFromServiceB$ })
  ]
};
