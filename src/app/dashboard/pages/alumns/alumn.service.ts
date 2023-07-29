import { Injectable } from '@angular/core';
import { Alumns } from './models';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnService {

  private alumns$ = new BehaviorSubject <Alumns[]> ([]);

 

  constructor() { }

getAlumns(): Observable<Alumns[]> {
  return this.alumns$.asObservable();

}


loadAlumns(): void{
  this.alumns$.next([
    {
      id:1,
      dni:11111111,
      name:'marco',
      surname:'polo',
      career:'diseno grafico',
    },
    {
      id:2,
      dni:22222222,
      name:'cosme',
      surname:'fulanito',
      career:'ingenieria nuclear',
    },
  ]);
}

create(): void {
  this.alumns$.pipe(take(1)).subscribe({

    next: (arrayActual) => {

      arrayActual.push({
        id: arrayActual.length + 1,
        dni: 3,
        name:'homero jimeno',
        surname:'simpson',
        career:'seguridad',
        
      });

      this.alumns$.next(arrayActual);

      }
    });
  }

}
