import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent {
  displayedColumns: string[] = [
    'id',
    'fullName',
    'email',
    'password',
    'actions',
  ];

  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<User>();

  @Output()
  editUser = new EventEmitter<User>();

  constructor(private route: Router) {}

  goToUser(user: User): void {
    this.route.navigate(['/dashboard/users', user.id]);
    // Convertir el objeto a una cadena JSON
    const objectString = JSON.stringify(user);
    localStorage.setItem('userData', objectString);
  }
}
