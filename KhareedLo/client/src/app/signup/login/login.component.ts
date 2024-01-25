import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      users:this.fb.array([])
    });
    this.addUser();
  }

  get usersFormArray(){
    return this.loginForm.get('users') as FormArray;
  }

  addUser(){
    const newUser = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: [''],
      phoneNumber: [''],
      dateOfBirth: [''],
      password:[''],
      confirmPassword:['']
    });
    this.usersFormArray.push(newUser)
  }
}
