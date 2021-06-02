import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncValidatorComponent } from './async-validator/async-validator.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "validation", component: FormValidationComponent },
      { path: "custom-validation", component: CustomValidatorComponent },
      { path: "async-validation", component: AsyncValidatorComponent },
      { path: "cross-validation", component: CustomValidatorComponent },
      { path: "dynamic-validation", component: CustomValidatorComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationRoutingModule { }
