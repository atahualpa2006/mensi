import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserService } from './user.service';
import { UserMockService } from './mocks/user-mocks.service';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogComponent,
    UserTableComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    UsersRoutingModule,
  ],
  exports: [
    UsersComponent,
  ],

  providers: [
    {
    provide: UserService,
    // useClass:UserMockService,
  },

  {
  provide:'IS_DEV',
  useValue: true,

  }
]
})
export class UsersModule { }
