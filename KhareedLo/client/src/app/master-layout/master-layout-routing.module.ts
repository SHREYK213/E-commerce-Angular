import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutModule } from './master-layout.module';
import { MasterLayoutComponent } from './master-layout.component';

const routes: Routes = [
  {path: '',component:MasterLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterLayoutRoutingModule { }
    