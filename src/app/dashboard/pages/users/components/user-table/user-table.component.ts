import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { Route, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  
  displayedColumns: string[] = ['id','fullName', 'email', 'password', 'actions'];

  @Input()
  dataSource : User[]= [];

  @Output()
  deleteUser = new EventEmitter<User>();

  @Output()
  editUser = new EventEmitter<User>();

constructor (private router:Router ){
  
    
  }
  goToElement(id: number) {
    this.router.navigate(['/user', id]);
 
   }
}


 


