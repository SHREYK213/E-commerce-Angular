import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/common/services/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!:FormGroup;
  welcome = "Welcome back"
  formsData!: any[];
  formButton = "Submit"

  constructor(private fb:FormBuilder,
    private formsService:FormsService){
     this.loginForm = this.fb.group({
       users:this.fb.array([])
     });
   }

  ngOnInit(): void {
    // Fetch form data from the service
    this.formsService.getForms().subscribe((data: any) => {
      this.formsData = data;
      this.createLoginForm();
    });
  }
  

  createLoginForm(): void {
    const formGroupConfig: { [key: string]: any } = {};
  
    for (const formField of this.formsData) {
      // Include only the email and password fields
      if (formField.name === 'Email' || formField.name === 'Password') {
        const formControlConfig = formField.inputAllowed ? ['', Validators.required] : '';
  
        formGroupConfig[formField.name] = formControlConfig;
      }
    }
  
    this.loginForm = this.fb.group({
      users: this.fb.array([this.fb.group(formGroupConfig)])
    });
  }

  
  
}
