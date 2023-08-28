import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';
import { FoldersComponent } from './folders.component';
import { EffectsModule } from '@ngrx/effects';
import { FoldersEffects } from './store/folders.effects';
import { StoreModule } from '@ngrx/store';
import { foldersFeature } from './store/folders.reducer';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FoldersComponent
  ],
  imports: [
    CommonModule,
    FoldersRoutingModule,
    SharedModule,
    StoreModule.forFeature(foldersFeature),
    EffectsModule.forFeature([FoldersEffects]),

  ]
})
export class FoldersModule { }
