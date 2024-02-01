import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupModule } from './signup/signup.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule  ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
