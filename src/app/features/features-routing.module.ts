import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const formsModule = () => import("./custom-forms-module/custom-forms-module.module").then(x => x.CustomFormsModuleModule);


const routes: Routes = [
  {
    path: "", children: [
      { path: "forms", loadChildren: formsModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
