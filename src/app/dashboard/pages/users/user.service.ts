import { Injectable } from '@angular/core';
import { CreateUserData, UpDateUserData, User } from './models';
import { BehaviorSubject, Observable, Subject, delay, map, mergeMap, of, take } from 'rxjs';
import { UserMockService } from './mocks/user-mocks.service';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { generateRandomString } from 'src/app/shared/utils/helpers';
import { environment } from 'src/environments/environment';




// const USER_DB : Observable <User[]> = of ([

//   {...
//     id: 1,
//     name:'marcos',
//     surname:'rodriguez',
//     email:'mark@.com',
//     password:'123456',
//   },

//   {
//    id: 2,
//    name:'juan',
//    surname:'paez',
//    email:'paez@.com',
//    password:'123456',
//  }

// ]).pipe(delay(1000));



@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _users$ = new BehaviorSubject <User[]> ([]);

  private users$ = this._users$.asObservable ();

  private _isLoading$ = new BehaviorSubject(false);

  public isLoading$ = this._isLoading$.asObservable();


  constructor( private notifier : NotifierService, private httpClient : HttpClient) { }

  loadUsers(): void {
    this._isLoading$.next(true);
    // this.httpClient.get <User[]> (' http://localhost:3000/users',{
    this.httpClient.get <User[]> ( environment.baseApiUrl + '/users' , {
      headers: new HttpHeaders({
        'token': '123456789'
      }),
    })
    .subscribe({
      next: (response) => {
        // si todo sale bien , sigue esta logica
        this._users$.next(response);
      },
      error: () =>{
        // si todo sale mal
        this.notifier.showError('Error en la carga');

      },


      complete:() => {
        // siempre que el observable se completa



      }


    })


    // USER_DB.subscribe ({
    //   next: (usuariosFromDb) => this._users$.next(usuariosFromDb),
    // });
  }


  getUsers() : Observable <User []> {
    return this.users$;
  }

    




  getUserById (id: number) : Observable < User | undefined> {
    return this.users$.pipe(
      map(( users ) => users.find((u) => u.id === id)),
      take(1),
    )
  }


  createUser ( user: CreateUserData): void{
    const token = generateRandomString(20);

          this.httpClient
          .post  <User>  (`${environment.baseApiUrl}/users`, { ...user, token })
          .pipe(
            mergeMap((userCreate) => 
            this.users$.pipe(
              take(1),
              map(
                (arrayActual) => [...arrayActual, userCreate])
              )
            )
          )
          .subscribe({
            next: (arrayActualizado) => {
              this._users$.next(arrayActualizado);
            }
          })  
          }
          


        
   


  updateUserById (id: number, usuarioActualizado: UpDateUserData): void {
  console.log('updateUserById' , id, usuarioActualizado);
    this.httpClient
    .put(`${environment.baseApiUrl}/users/${id}`, usuarioActualizado )
    .subscribe({
      next :() => this.loadUsers(),
      error: (err) => {
        console.error('Error updating user:' , err);
      },
    }); 
  }

  deleteUserById (id: number): void {

    this.httpClient.delete(environment.baseApiUrl + '/users/' + id)
    .pipe(
      mergeMap(
        (responseUserDelete) => this.users$.pipe(
          take(1),
          map ((arrayActual) => arrayActual.filter((u) => u.id !==id))
        )
      )
    ).subscribe({
      next: (arrayActualizado) => this._users$.next(arrayActualizado),
    })

  }
}
