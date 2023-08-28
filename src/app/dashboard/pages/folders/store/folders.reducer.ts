import { createFeature, createReducer, on } from '@ngrx/store';
import { FoldersActions } from './folders.actions';
import { category } from '../models';
import { FOLDERS_MOCK } from '../moks';

export const foldersFeatureKey = 'folders';

export interface State {

categories: category []

}

export const initialState: State = {

  categories: []
};

export const reducer = createReducer(
  initialState,
  on(FoldersActions.loadFolders, state => {
    return{
      categories:   FOLDERS_MOCK,
    }
  }),

);

export const foldersFeature = createFeature({
  name: foldersFeatureKey,
  reducer,
});

