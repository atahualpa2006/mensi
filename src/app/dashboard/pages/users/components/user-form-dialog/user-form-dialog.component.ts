import { Component, Inject, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { noHomeroValidator } from 'src/app/shared/utils/form-validator';
import { User } from '../../models';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent {
  editUser?: User;
  nameControl = new FormControl <string | null> (null, [
    Validators.required,
    Validators.minLength(2),
    noHomeroValidator()]);

  surnameControl = new FormControl <string | null>(null, [
    Validators.required,
    Validators.minLength(2)]);

  emailControl = new FormControl <string | null>(null,
    Validators.required);

  passwordControl = new FormControl <string | null>(null,
    Validators.required);

  roleControl = new FormControl <string |null>(null, [Validators.required]);

  userForm = new FormGroup ({

  name:this.nameControl,
  surname:this.surnameControl,
  email:this.emailControl,
  password:this.passwordControl,
  role:this.roleControl,


  });



constructor(
  private dialogRef: MatDialogRef<UserFormDialogComponent>,
  @Inject (MAT_DIALOG_DATA) private data?:User,

  ){
    if (this.data) {
      this.editUser = this.data;
      this.nameControl.setValue(this.data.name);
      this.surnameControl.setValue(this.data.surname);
      this.emailControl.setValue(this.data.email);
      this.passwordControl.setValue(this.data.password);
      this.roleControl.setValue(this.data.role)

    }
  }

  onSubmit(): void {

    if (this.userForm.invalid){
      this.userForm.markAllAsTouched();

    } else {
      const payload: any = {
        ...this.userForm.value
      }

      if (this.editUser ) {
        payload ['token'] =this.editUser.token;
      }
      this.dialogRef.close(payload);
    }
  }
  }

