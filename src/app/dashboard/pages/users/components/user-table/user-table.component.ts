import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  
  displayedColumns: string[] = ['fullName', 'email', 'password', "actions"];

  @Input()
  dataSource : User[]= [];

  @Output()
  deleteUser = new EventEmitter<User>();

  @Output()
  editUser = new EventEmitter<User>();

}
