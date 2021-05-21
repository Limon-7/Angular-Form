import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const formsModule = () => import("./custom-forms-module/custom-forms-module.module").then(x => x.CustomFormsModuleModule);
const rxjsModule = () => import("./rxjs-practical/rxjs-practical.module").then(x => x.RxjsPracticalModule);

const routes: Routes = [
  {
    path: "", children: [
      { path: "forms", loadChildren: formsModule },
      { path: "rxjs", loadChildren: rxjsModule },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
