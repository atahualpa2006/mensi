import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFolders from './folders.reducer';
import { state } from '@angular/animations';

export const selectFoldersState = createFeatureSelector<fromFolders.State>(
  fromFolders.foldersFeatureKey
);


export const selectFoldersArray = createSelector(selectFoldersState, (state) => state.categories )
