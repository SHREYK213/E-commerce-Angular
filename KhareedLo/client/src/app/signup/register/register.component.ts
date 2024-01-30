import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!:FormGroup;
  welcome = "Welcome !"

  constructor(private fb:FormBuilder){
    this.registerForm = this.fb.group({
      users:this.fb.array([])
    });
    this.addUser();
  }

  get usersFormArray(){
    return this.registerForm.get('users') as FormArray;
  }

  addUser(){
    const newUser = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      // password:['', Validators.required],
      // confirmPassword:['', Validators.required]
    });
    this.usersFormArray.push(newUser)
  }
}
