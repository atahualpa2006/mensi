import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  eslocale  from '@angular/common/locales/es-AR'
import { registerLocaleData } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


registerLocaleData(eslocale);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // DashboardModule,
    MatCardModule,
    // AuthModule,
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
