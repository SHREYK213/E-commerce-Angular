import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayoutComponent } from './master-layout.component';
import { ComponentsComponent } from './components/components.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MasterLayoutRoutingModule } from './master-layout-routing.module';
import { CommonUtilsModule } from '../common-utils/common-utils.module';



@NgModule({
  declarations: [
    MasterLayoutComponent,
    ComponentsComponent,
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MasterLayoutRoutingModule,
    CommonUtilsModule
  ]
})
export class MasterLayoutModule { }
