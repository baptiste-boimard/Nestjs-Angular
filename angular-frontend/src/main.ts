import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
// import { externalDataReducer } from './app/store/external-data.reducer';
// import { ExternalDataEffects } from './app/store/external-data.effects';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers || [],
    provideHttpClient(),
    // provideStore({ externalData: externalDataReducer }),
    // provideEffects([ExternalDataEffects]),
  ]
})
  .catch((err) => console.error(err));
