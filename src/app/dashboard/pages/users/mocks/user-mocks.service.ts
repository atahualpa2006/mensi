import { User } from "../models";

export class UserMockService{


        private users:User[] = [
          {
            id: 1,
            name:'falso',
            surname:'falso',
            email:'falso@.com',
            password:'falso',
            token:'',
            role:'ADMINISTRADOR',
          },


        ];

    getUsers() : User [] {
        return this.users;
      }
}
