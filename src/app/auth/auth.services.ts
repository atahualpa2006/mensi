import { Injectable } from "@angular/core";
import { loginPayload } from "./models";
import { User } from "../dashboard/pages/users/models";
import { BehaviorSubject, Observable, map, take, observable } from 'rxjs';
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { RepositionScrollStrategy } from "@angular/cdk/overlay";
import { environment } from "src/environments/environment";
import { Store } from "@ngrx/store";
import { AuthActions } from "../store/auth/auth.actions";



@Injectable ({ providedIn: 'root'})
export class  AuthService {

    // private _authUser$ = new BehaviorSubject <User | null> (null);
    // public authUser$ = this._authUser$.asObservable();

    constructor (
        private notifier: NotifierService,
        private router: Router,
        private httpClient:HttpClient,
        private store: Store, ) {}

        isAuthenticated() : Observable <boolean> {

            return this.httpClient.get<User[]>(environment.baseApiUrl + '/users', {
            // return this.httpClient.get <User[]> ('http://localhost:3000/users', {
                params: {
                    token: localStorage.getItem('token') || '',
                }

            } ).pipe(
                map((usersResult) => {

                if (usersResult.length) {
                  const authUser = usersResult[0];
                  // this._authUser$.next(authUser);
                this.store.dispatch(AuthActions.setAuthUser({payload: authUser}));
                }

                    return !!usersResult.length
                })
            )

        }



        login (payLoad: loginPayload): void {
               this.httpClient.get<User[]>(environment.baseApiUrl + '/users', {
            // this.httpClient.get <User[]> ('http://localhost:3000/users', {
                params: {
                    email: payLoad.email || '',
                    password: payLoad.password ||''

                }
            }).subscribe({
                next:(response) => {

                    if (response.length) {
                       const authUser = response[0];
                        // login valido
                        // this._authUser$.next(authUser);
                        this.store.dispatch(AuthActions.setAuthUser({payload: authUser}));

                        this.router.navigate(['/dashboard/home']);

                        localStorage.setItem('token', authUser.token);
                    }else{
                    //   login invalido
                    this.notifier.showError('Email o contrasena invalida');
                    // this._authUser$.next(null);
                    this.store.dispatch(AuthActions.setAuthUser({payload: null}))

                    }
                },

                error: (err) => {

                    if (err instanceof HttpErrorResponse) {
                        let message = 'Error inesperado';
                        if (err.status=== 500) {
                        }
                        if (err.status === 400) {
                            message ='Email o contrasena invalida';
                        }
                    this.notifier.showError (message)
                    }
                }
            })

        // const MOCK_USER: User = {
        // id: 50,
        // name:'Mockname',
        // surname:'Mocksurname',
        // email:'mock@mail.com',
        // password:'1',
        // }

        // if (payLoad.email === MOCK_USER.email && payLoad.password === MOCK_USER.password) {

        //     this._authUser$.next(MOCK_USER);
        //     this.router.navigate(['/dashboard/home']);
        // } else {
        //     this.notifier.showError('Email o contrasena invalida');
        //     this._authUser$.next(null);
        // }

    }

    public logout(): void {
      this.store.dispatch(AuthActions.setAuthUser({ payload:null}))

   }
}

