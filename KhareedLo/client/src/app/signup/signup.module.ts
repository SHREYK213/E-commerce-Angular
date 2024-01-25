import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login/login.component';
import { SignupRoutingModule } from './signup-routing.module';
import { CommonUtilsModule } from '../common-utils/common-utils.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    RegisterComponent    ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    CommonUtilsModule,
]
})
export class SignupModule { }
