import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscriptionActions } from './inscription.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IncriptionWhithAlumnAndFolder } from '../models';
import { AlumnService } from '../../alumns/alumn.service';


@Injectable()
export class InscriptionEffects {

  loadInscriptions$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscriptionActions.loadInscriptions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getInscriptionFromDB().pipe(
          map(data => InscriptionActions.loadInscriptionsSuccess({ data })),
          catchError(error => of(InscriptionActions.loadInscriptionsFailure({ error }))))
      )
    );
  });


  // loadAlumnOptions$= createEffect(() => {
  //   return this.actions$.pipe(

  //     ofType(InscriptionActions.loadAlumnsOptions),


  //     concatMap(() =>

  //       this.getInscriptionFromDB().pipe(
  //         map(data => InscriptionActions.loadAlumnsOptionsSucces({ data })),
  //         catchError(error => of(InscriptionActions.loadAlumnsOptionsFailure({ error }))))
  //     )
  //   );
  // });





  constructor(private actions$: Actions, private httpClient: HttpClient ) {}

  private getInscriptionFromDB():Observable<IncriptionWhithAlumnAndFolder []> {
return this.httpClient.get<IncriptionWhithAlumnAndFolder []>(environment.baseApiUrl + '/inscriptions?_expand=alumn&_expand=folder')


  }
}
