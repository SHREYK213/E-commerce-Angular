import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/common/services/forms.service';
import { LoginService } from 'src/app/common/services/user/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  welcome = 'Welcome back';
  formsData!: any[];
  formButton = 'Submit';
  nextButton!: boolean;
  accumulatedFormData: any = {};

  constructor(
    private fb: FormBuilder,
    private formsService: FormsService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      users: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.nextButton = false;
    // Fetch form data from the service
    this.formsService.getForms().subscribe((data: any) => {
      this.formsData = data;
      this.createLoginForm();
    });
  }

  formSubmitted(data: any) {
    const transformedData = this.transformFormData(data);
    console.log('accumulated', this.accumulatedFormData);
    this.submitClicked();
  }

  submitClicked() {
    this.loginService.loginUser(this.accumulatedFormData).subscribe(
      (res) => {
        // Handle successful registration response here
        console.log('Login successful:', res);
        this.router.navigateByUrl('');
      },
      (error) => {
        // Handle registration error here
        console.error('Login failed:', error);
      }
    );
  }

  createLoginForm(): void {
    const formGroupConfig: { [key: string]: any } = {};

    for (const formField of this.formsData) {
      // Include only the email and password fields
      if (formField.name === 'Email' || formField.name === 'Password') {
        const formControlConfig = formField.inputAllowed
          ? ['', Validators.required]
          : '';

        formGroupConfig[formField.name] = formControlConfig;
      }
    }

    this.loginForm = this.fb.group({
      users: this.fb.array([this.fb.group(formGroupConfig)]),
    });
  }

  transformFormData(formData: any): void {
    this.accumulatedFormData = {
      ...this.accumulatedFormData,
      email:
        formData.users[0]['Email'] ||
        formData.users[0]['email'] ||
        this.accumulatedFormData.email ||
        '',
      password:
        formData.users[0]['Password'] ||
        formData.users[0]['password'] ||
        this.accumulatedFormData.password ||
        '',
    };
  }
}
