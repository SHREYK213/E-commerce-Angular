import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo: "master-layout", pathMatch: "full"
  },
  {
    path: "",
    loadChildren: () =>
      import("../app/master-layout/master-layout.module").then((m) => m.MasterLayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
