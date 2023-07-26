import { Injectable } from '@angular/core';
import { User } from './models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private users:User[] = [
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
 
  ];

  private users$ = new BehaviorSubject <User[]>([]);


  constructor() { }

loadUsers(): void {
  this.users$.next(this.users);
}


  getUsers() : Subject<User []> {
    // return this.users;
    return this.users$;
  }
}


