import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  }
  );

  handleLoginSubmit() {
    // TODO: implement login logic
    alert("Login erfolgreich!")
    this.loginForm.reset();
    
  }
  
  handleRegisterSubmit() {
    alert("Registrierung erfolgreich!")
    this.registerForm.reset();
    // TODO: implement register logic
  }
}
