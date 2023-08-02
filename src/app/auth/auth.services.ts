import { Injectable } from "@angular/core";
import { loginPayload } from "./models";
import { User } from "../dashboard/pages/users/models";
import { BehaviorSubject } from "rxjs";
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router";



@Injectable ({ providedIn: 'root'})
export class authservice {

    private authUser$ = new BehaviorSubject <User | null> (null);

    constructor (private notifier: NotifierService, private router: Router) {}


        login (payLoad: loginPayload): void {
        const MOCK_USER: User = {
        id: 50,
        name:'Mockname',
        surname:'Mocksurname',
        email:'mock@mail.com',
        password:'1',
        }

        if (payLoad.email === MOCK_USER.email && payLoad.password === MOCK_USER.password) {

            this.authUser$.next(MOCK_USER);
            this.router.navigate(['/dashboard/home']);
        } else {
            this.notifier.showError('Email o contrasena invalida');
            this.authUser$.next(null);
        }

    }    

}

