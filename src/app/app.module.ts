import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import  eslocale  from '@angular/common/locales/es-AR'
import { registerLocaleData } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { AlumnsModule } from './dashboard/pages/alumns.module';

registerLocaleData(eslocale);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    MatCardModule,
    AuthModule,
  ],
  providers: [
    {
    provide: LOCALE_ID,
    useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
