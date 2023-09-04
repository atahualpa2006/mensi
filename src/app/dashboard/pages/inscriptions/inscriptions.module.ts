import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionsComponent } from './inscriptions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionEffects } from './store/inscription.effects';
import { StoreModule } from '@ngrx/store';
import { inscriptionFeature } from './store/inscription.reducer';
import { InscriptionsDialogComponent } from './components/inscriptions-dialog/inscriptions-dialog.component';



@NgModule({
  declarations: [InscriptionsComponent, InscriptionsDialogComponent],
  imports: [CommonModule,
     SharedModule,
     InscriptionsRoutingModule,
    StoreModule.forFeature(inscriptionFeature),
     EffectsModule.forFeature([InscriptionEffects])
    ],
})
export class InscriptionsModule { }
