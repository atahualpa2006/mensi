import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { User } from './models';


 const ELEMENT_DATA: User [] = [
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

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public users: User [] = ELEMENT_DATA;

  constructor(
    private matDialog: MatDialog
  ) {}



  onCreateUser():void{
  this.matDialog
  //se abre el modal
  .open(UserFormDialogComponent)
  //despues que cierre
  .afterClosed()
  //hago esto, recibo el valor ingresado
  .subscribe({
      next: (v) => {
        if (v) {

          
          this.users = [
            ...this.users,
          {
            id:this.users.length + 1,
            name: v.name,
            email:v.email,
            password:v.password,
            surname:v.surname
          }

        ];
        console.log('Se recibio el valor: ', v);
      } else {
        console.log ('Se cancelo');
      }
      },
    });
  }
 
  onDeleteUser (userToDelete:User): void{

    if (confirm(`Seguro de eliminar a ${userToDelete.name}?`)) {
      this.users = this.users.filter((u) => u.id !== userToDelete.id);

    }

    }

    onEditUser (userToEdit: User): void{
      
        this.matDialog
        //se abre el modal
        .open(UserFormDialogComponent, {
          data: userToEdit
        })
        //despues que cierre
        .afterClosed()
        //hago esto, recibo el valor ingresado
        .subscribe({
            next: (userUpdated) => {
              console.log(userUpdated) 
              if (userUpdated) {
                this.users = this.users.map((user) => {
                  return user.id === userToEdit.id
                  ? { ...user, ...userUpdated }
                  :user 
                })
              }          
            
            },
          });

    }
  }


