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
import { MatListModule } from '@angular/material/list';
import { AuthModule } from '../auth/auth.module';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { AlumnsModule } from './pages/alumns/alumns.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FoldersModule } from './pages/folders/folders.module';



@NgModule({
  declarations: [
    DashboardComponent,
    NavMenuComponent,
    ToolbarComponent,

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
    MatListModule,
    AuthModule,
    AlumnsModule,
    FoldersModule,
    DashboardRoutingModule,

  ],

  exports:[DashboardComponent],
})
export class DashboardModule { }
