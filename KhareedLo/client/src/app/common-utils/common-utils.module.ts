import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonUtilsRoutingModule } from './common-utils-routing.module';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    CommonUtilsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class CommonUtilsModule { }
