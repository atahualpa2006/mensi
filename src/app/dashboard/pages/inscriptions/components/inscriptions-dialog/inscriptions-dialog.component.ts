import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { category } from '../../../folders/models/index';
import { Store } from '@ngrx/store';
import { InscriptionActions } from '../../store/inscription.actions';

@Component({
  selector: 'app-inscriptions-dialog',
  templateUrl: './inscriptions-dialog.component.html',
  styles: [
  ]
})
export class InscriptionsDialogComponent implements OnInit {

  alumnIdControl = new FormControl(null, Validators.required);
  categoryIdControl = new FormControl(null, Validators.required);

  inscriptionForm = new FormGroup({

    alumnId:this.alumnIdControl ,
    categoryId: this.categoryIdControl,

});

constructor( private store: Store ) {}

ngOnInit(): void {

this.store.dispatch(InscriptionActions.loadAlumnsOptions());
this.store.dispatch(InscriptionActions.loadFolderOptions());

}




}
