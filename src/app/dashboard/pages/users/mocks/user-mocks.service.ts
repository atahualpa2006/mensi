import { User } from "../models";

export class UserMockService{


        private users:User[] = [
          {
            id: 1,
            name:'falso',
            surname:'falso',
            email:'falso@.com',
            password:'falso',
          },
       
          {
           id: 2,
           name:'fake',
           surname:'fake',
           email:'fake@.com',
           password:'fake',
         },
        ];
   
    getUsers() : User [] {
        return this.users;
      }
}