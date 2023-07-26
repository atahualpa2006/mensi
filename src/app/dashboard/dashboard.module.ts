import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeModule } from './pages/home/home.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    SharedModule,
    RouterModule,
    HomeModule,
  ],

  exports:[
    DashboardComponent,
    
  ]
})
export class DashboardModule { }
