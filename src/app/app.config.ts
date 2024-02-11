import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import routesConfig from './routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routesConfig), provideClientHydration()],
};
