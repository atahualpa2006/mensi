import { Component, Inject, OnDestroy, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { User } from './models';
import { UserService } from './user.service';
import { Subject, Subscription } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy {
  public users: User [] = [];
  public allSubs : Subscription[] = [];
  public destroyed = new Subject<boolean>();

  constructor( 
    private matDialog: MatDialog,
    private userService: UserService,
    private notifier:NotifierService,
    @Inject('IS_DEV') private isDev: boolean,
  ) {
    this.userService.loadUsers();
    this.userService.getUsers().subscribe({
      next: (v) => {
        this.users = v;
        this.notifier.showSuccess('carga exitosa');
   
      } 
    });
    // console.log(this.isDev);
    
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }




  

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


