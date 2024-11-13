import { InjectionToken } from '@angular/core';
import { Environment } from './environment.type';

export const ENVIRONMENT = new InjectionToken<Environment>(
  'Environment config'
);
