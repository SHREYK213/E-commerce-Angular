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
  resendCounter: number = 5;
  showResendOtp=false;
  constructor(
      private otpService:OtpService,
      private router:Router,
      private registerService:RegisterService){

  }

  ngOnInit():void{
    this.accessStoredEmail();
    this.startResendCounter();
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

resendOtp(){
  if (this.storedEmail) {
    // Valid OTP, proceed with verification
    const jsonBody = {
      email: this.storedEmail // Assuming storedEmail is the user's email
    };

    this.otpService.resendOtp(jsonBody)
      .subscribe(
        (res) => {
          // Handle successful OTP verification response here
          console.log('OTP resent successful:', res);
        this.router.navigateByUrl('signup/login');
          // Perform further actions if needed
        },
        (error) => {
          // Handle OTP verification error here
          console.error('OTP verification failed:', error);
        }
      );
  }}

startResendCounter() {
  const interval = setInterval(() => {
    if (this.resendCounter > 0) {
      this.resendCounter--;
    } else {
      // Stop the interval when the countdown reaches 0
      clearInterval(interval);
      this.showResendOtp = true;
    }
  }, 1000); // Update every 1 second
}

formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Format the time as "mm:ss"
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}


}
