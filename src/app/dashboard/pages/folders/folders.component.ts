import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FoldersActions } from './store/folders.actions';
import { Observable } from 'rxjs';
import { category } from './models'
import { selectFoldersArray } from './store/folders.selectors';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styles: [
  ]
})

export class FoldersComponent implements OnInit  {
  folders$: Observable <category []>;

  constructor (private store:Store) {

    this.folders$ = this.store.select(selectFoldersArray);
  }

  displayedColumns = ['id', 'name', 'actions']

ngOnInit(): void {

  this.store.dispatch(FoldersActions.loadFolders())
}


}
