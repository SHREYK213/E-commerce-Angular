import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!:FormGroup;

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
      email: ['', [Validators.required, Validators.email]],
      password:[''],
    });
    this.usersFormArray.push(newUser)
  }
}
