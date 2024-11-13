import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ENVIRONMENT } from '../../environments/environment.token';

export const httpErrorsInterceptor: HttpInterceptorFn = (req, next) => {
  const environment = inject(ENVIRONMENT);

  const clonedRequest = req.clone({
    url: environment.apiUrl + req.url,
  });

  return next(clonedRequest);
};
