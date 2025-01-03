import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { environment } from '..//environments/environment.local';
import { ENVIRONMENT } from '..//environments/environment.token';
import { appRoutes } from './app.routes';
import { httpErrorsInterceptor } from './interceptors/http-errors/http-errors.interceptor';
import { httpInterceptor } from './interceptors/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(
      withInterceptors([httpInterceptor, httpErrorsInterceptor])
    ),
    provideAnimationsAsync(),
    { provide: ENVIRONMENT, useValue: environment },
  ],
};
