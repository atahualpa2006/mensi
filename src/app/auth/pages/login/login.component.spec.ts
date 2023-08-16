import { Component } from '@angular/core';
import { LoginComponent } from './login.component';
import { TestBed } from '@angular/core/testing';
import { matFormFieldAnimations, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { loginPayload } from '../../models/index';
import { HttpClientTestingModule } from'@angular/common/http/testing';




describe('LoginComponent', () => {

  let component: LoginComponent;

  beforeEach(() => {
  TestBed.configureTestingModule({
    declarations:[LoginComponent],
    imports:[MatFormFieldModule, MatInputModule, HttpClientTestingModule   ]
  })

  component = TestBed.createComponent(LoginComponent).componentInstance
 })


 it('El formulario debe ser valido si los campos del mismo quedan vacios', () => {
  component.emailControl.setValue('');
  component.passwordControl.setValue('');

  expect(component.loginForm.invalid).toBeTrue();
 })
})




