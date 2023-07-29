import { Injectable } from '@angular/core';
import { CreateUserData, UpDateUserData, User } from './models';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';
import { UserMockService } from './mocks/user-mocks.service';


const USER_DB : Observable <User[]> = of ([

  {
    id: 1,
    name:'marcos',
    surname:'rodriguez',
    email:'mark@.com',
    password:'123456',
  },

  {
   id: 2,
   name:'juan',
   surname:'paez',
   email:'paez@.com',
   password:'123456',
 }

]).pipe(delay(1000));



@Injectable({
  providedIn: 'root'
})

export class UserService {

  private subjectUsers$ = new Subject <User []> ();

  private sendNotication$ = new Subject <string> ();

  private _user$ = new BehaviorSubject <User[]> ([]);

  private users$ = this._user$.asObservable ();
  notifier: any;


  constructor() { 

    this.sendNotication$.subscribe ({
  next: (message) => alert (message),
  });
  }

  sendNotification (notification: string) : void {
    this.sendNotication$.next(notification);
  }

  loadUsers(): void {
    USER_DB.subscribe ({
      next: (usuariosFromDb) => this._user$.next(usuariosFromDb),
    });
  }


  getUsers() : Observable <User []> {
    return this.users$;
  }


  createUser ( user: CreateUserData): void{
    this._user$.pipe(take(1)).subscribe ({
      next:(arrayActual) => {
        this._user$.next([
          ...arrayActual, 
          {...user, id: arrayActual.length + 1},
      ]);
    },
    });

  }

  updateUserById (id: number, usuarioActualizado: UpDateUserData): void {
    this.users$.pipe(take(1)).subscribe({
     next: (arrayActual) => {
      this._user$.next (
        arrayActual.map((u) =>
        u.id === id ? {...u, ...usuarioActualizado}: u
        )
      );
      this.notifier.showSuccess('Usuario actualizado con exito')
     }, 
    });
  }

  deleteUserById (id: number): void {
    this._user$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
      this._user$.next(arrayActual.filter((u) => u.id !== id));
      this.notifier.showSuccess('Usuario eliminado con exito')
      },
    });
  }
}
