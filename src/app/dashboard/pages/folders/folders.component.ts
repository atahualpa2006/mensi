import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FoldersActions } from './store/folders.actions';
import { Observable } from 'rxjs';
import { category } from './models'
import { selectFoldersArray } from './store/folders.selectors';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { selectAuthUserRole } from 'src/app/store/auth/auth.selector';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styles: [
  ]
})

export class FoldersComponent implements OnInit  {
  folders$: Observable <category []>;

public isAdmin$: Observable <any>

  constructor (private store:Store) {

    this.folders$ = this.store.select(selectFoldersArray);

    this.isAdmin$ = this.store.select(selectAuthUserRole);
  }

  displayedColumns = ['id', 'name', 'actions']

ngOnInit(): void {

  this.store.dispatch(FoldersActions.loadFolders())
}


}
