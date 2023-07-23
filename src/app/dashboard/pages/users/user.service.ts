import { Injectable } from '@angular/core';
import { User } from './models';

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

  constructor() { }
  getUsers() : User [] {
    return this.users;
  }
}


