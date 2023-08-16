import { Component } from '@angular/core';
import { LoginComponent } from './login.component';
import { TestBed } from '@angular/core/testing';
import { matFormFieldAnimations, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../auth.services';
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


 it('Al llamar login() y el formulario es invalido, se debe llamar al metodo markAllAsTouched de la propiedad loginForm', () => {

    component.emailControl.setValue('');
    component.passwordControl.setValue('');

    expect(component.loginForm.invalid).toBeTrue();



    const spyOfMarkAllAsTouched = spyOn (component.loginForm, 'markAllAsTouched');
    component.login()

    expect (spyOfMarkAllAsTouched).toHaveBeenCalled()
 })

 it( 'Al llamar al login () y el formulario es valido, debe haberse llamado al metodo login del AuthService', () => {

const authService = TestBed.inject (AuthService);

component.emailControl.setValue('falso@gmail.com');
component.passwordControl.setValue('1234567');

expect(component.loginForm.valid).toBeTrue();

const spyOnAuthServiceLogin = spyOn(authService, 'login');

component.login();

expect(spyOnAuthServiceLogin).toHaveBeenCalled();

 })


})


