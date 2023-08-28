import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const FoldersActions = createActionGroup({
  source: 'Folders',
  events: {
    'Load Folders': emptyProps(),


  }
});
