import { Injectable } from "@angular/core";
import { loginPayload } from "./models";
import { User } from "../dashboard/pages/users/models";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { RepositionScrollStrategy } from "@angular/cdk/overlay";



@Injectable ({ providedIn: 'root'})
export class  AuthService {

    private _authUser$ = new BehaviorSubject <User | null> (null);
    public authUser$ = this._authUser$.asObservable();

    constructor (
        private notifier: NotifierService, 
        private router: Router,
        private httpClient:HttpClient ) {}

        isAuthenticated() : Observable <boolean> {
            return this.authUser$.pipe(
            take(1),
            map((user) => !!user),
            );
        }



        login (payLoad: loginPayload): void {

// metodo http clien con usuario registrado

            this.httpClient.get <User[]> ('http://localhost:3000/users', {
                params: {
                    email: payLoad.email || '',
                    password: payLoad.password ||''

                }
            }).subscribe({
                next:(response) => {

                    if (response.length) {
                        // login valido
                        this._authUser$.next(response[0]);
                        this.router.navigate(['/dashboard/home']);
                    }else{
                    //   login invalido  
                    this.notifier.showError('Email o contrasena invalida');
                    this._authUser$.next(null);
                    
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

}

