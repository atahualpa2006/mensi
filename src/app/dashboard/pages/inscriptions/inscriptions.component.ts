import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscriptionActions } from './store/inscription.actions';
import { Observable } from 'rxjs';
import { IncriptionWhithAlumnAndFolder } from './models';
import { selectInscriptions } from './store/inscription.selectors';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styles: [
  ]
})
export class InscriptionsComponent implements OnInit  {

  displayedColumns = [ 'id','fullname','language','total' ];
  inscription$: Observable<IncriptionWhithAlumnAndFolder[]>;

  constructor(private store: Store) {
    this.inscription$ = this.store.select(selectInscriptions)


  }
  ngOnInit(): void {
   this.store.dispatch(InscriptionActions.loadInscriptions())
  }

}


selectInscriptions
