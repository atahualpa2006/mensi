import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { isEqualCheck } from '@ngrx/store/src/selector';
import { map } from 'rxjs';
import { selectAuthState, selectAuthUserRole } from 'src/app/store/auth/auth.selector';


export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject (Router);

  return inject(Store).select(selectAuthUserRole).pipe(
  map((isAdmin) => {
    if (isAdmin ==='USUARIO') return router.createUrlTree(['dashboard/home'])

    return true;
  }
    ))


};
