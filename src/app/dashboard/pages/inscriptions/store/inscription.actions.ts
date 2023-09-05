import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IncriptionWhithAlumnAndFolder } from '../models';
import { HttpErrorResponse } from '@angular/common/http';
import { Alumns } from '../../alumns/models';
import { category } from '../../folders/models';

export const InscriptionActions = createActionGroup({
  source: 'Inscription',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: IncriptionWhithAlumnAndFolder[] }>(),
    'Load Inscriptions Failure': props<{ error: HttpErrorResponse }>(),

    'Load Alumns Options': emptyProps(),
    'Load alumns Options Succes': props<{data: Alumns[] }>(),
    'Load alumns Options Failure': props<{error: HttpErrorResponse}>(),

    'Load Folder Options': emptyProps(),
    'Load Folder Options Succes': props<{data: category [] }>(),
    'Load Folder Options Failure': props<{error: HttpErrorResponse}>(),


  }
});
