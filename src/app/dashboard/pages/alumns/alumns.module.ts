import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnsRoutingModule } from './alumns-routing.module';
import { AlumnsComponent } from './alumns.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AlumnsComponent
  ],
  imports: [
    CommonModule,
    AlumnsRoutingModule,
    MatTableModule,
    SharedModule,

  ]
})
export class AlumnsModule { }
