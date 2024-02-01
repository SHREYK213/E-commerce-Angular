import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgOtpInputComponent } from 'ng-otp-input';
import { otpconfig } from 'src/app/common/constants/otpconfig';
import { FormsService } from 'src/app/common/services/forms.service';
import { OtpService } from 'src/app/common/services/user/otp.service';
import { RegisterService } from 'src/app/common/services/user/register.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {
  otp!: string;
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  submitBtn = false;
  otpconfig = otpconfig;
  storedEmail!:any;
  constructor(
      private otpService:OtpService,
      private router:Router,
      private registerService:RegisterService){

  }

  ngOnInit():void{
    this.accessStoredEmail();
  }

  onOtpChange(otp: string) {
    this.otp = otp;   
    if(this.otp.length>5){
      this.submitBtn=true;
    }
    else{
      this.submitBtn = false;
    }
  }

  setVal(val: any) {
    this.ngOtpInput.setValue(val);
  }

    submitOtp() {
      if (this.otp && this.otp.length === this.otpconfig.length) {
        // Valid OTP, proceed with verification
        const jsonBody = {
          email: this.storedEmail, // Assuming storedEmail is the user's email
          otp: this.otp
        };
    
        this.otpService.verifyOtp(jsonBody)
          .subscribe(
            (res) => {
              // Handle successful OTP verification response here
              console.log('OTP verification successful:', res);
            this.router.navigateByUrl('signup/login');
              // Perform further actions if needed
            },
            (error) => {
              // Handle OTP verification error here
              console.error('OTP verification failed:', error);
            }
          );
      }
    }

accessStoredEmail(){
  this.storedEmail = this.registerService.getStoredEmail();
  console.log("otp",this.storedEmail);
  
}

}
