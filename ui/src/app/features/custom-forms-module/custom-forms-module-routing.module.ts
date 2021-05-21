import { ChildParentCheckboxComponent } from './child-parent-checkbox/child-parent-checkbox.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayDemoComponent } from './form-array-demo/form-array-demo.component';
import { FormcontrolFormgroupComponent } from './formcontrol-formgroup/formcontrol-formgroup.component';
import { FormcontrolReactiveFormComponent } from './formcontrol-reactive-form/formcontrol-reactive-form.component';
import { MultipleCheckboxComponent } from './multiple-checkbox/multiple-checkbox.component';
import { RadioCheckboxComponent } from './radio-checkbox/radio-checkbox.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { ChildParentCheckboxBooleanComponent } from './child-parent-checkbox-boolean/child-parent-checkbox-boolean.component';


const routes: Routes = [
  {
    path: "", children: [
      { path: "form-control", component: FormcontrolReactiveFormComponent },
      { path: "form-control-group", component: FormcontrolFormgroupComponent },
      { path: "formArray", component: FormArrayDemoComponent },
      { path: "select", component: SelectOptionsComponent },
      { path: "radio-checkbox", component: RadioCheckboxComponent },
      { path: "multiple-checkbox", component: MultipleCheckboxComponent },
      { path: "child-parent-checkbox", component: ChildParentCheckboxComponent },
      { path: "child-parent-boolean", component: ChildParentCheckboxBooleanComponent },
      { path: "register", component: RegisterFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomFormsModuleRoutingModule { }
