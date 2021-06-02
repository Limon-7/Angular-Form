import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const formsModule = () => import("./custom-forms-module/custom-forms-module.module").then(x => x.CustomFormsModuleModule);
const rxjsModule = () => import("./rxjs-practical/rxjs-practical.module").then(x => x.RxjsPracticalModule);
const formValidationModule = () => import("./form-validation/form-validation.module").then(x => x.FormValidationModule);
const animationModule = () => import("./animation/animation.module").then(x => x.AnimationModule);

const routes: Routes = [
  {
    path: "", children: [
      { path: "forms", loadChildren: formsModule },
      { path: "rxjs", loadChildren: rxjsModule },
      { path: "form-validation", loadChildren: formValidationModule },
      { path: "animation", loadChildren: animationModule },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
