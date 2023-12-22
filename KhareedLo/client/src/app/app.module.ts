import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupModule } from './signup/signup.module';
import { CommonUtilsModule } from './common-utils/common-utils.module';
import { HomepageComponent } from './dashboard/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterLayoutModule } from './master-layout/master-layout.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupModule,
    CommonUtilsModule,
    BrowserAnimationsModule,
    MasterLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
