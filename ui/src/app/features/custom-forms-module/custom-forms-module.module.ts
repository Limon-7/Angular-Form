import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormsModuleRoutingModule } from './custom-forms-module-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormcontrolReactiveFormComponent } from './formcontrol-reactive-form/formcontrol-reactive-form.component';
import { FormcontrolFormgroupComponent } from './formcontrol-formgroup/formcontrol-formgroup.component';
import { FormArrayDemoComponent } from './form-array-demo/form-array-demo.component';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { RadioCheckboxComponent } from './radio-checkbox/radio-checkbox.component';
import { MultipleCheckboxComponent } from './multiple-checkbox/multiple-checkbox.component';
import { ChildParentCheckboxComponent } from './child-parent-checkbox/child-parent-checkbox.component';
import { ChildParentCheckboxBooleanComponent } from './child-parent-checkbox-boolean/child-parent-checkbox-boolean.component';


@NgModule({
  declarations: [
    RegisterFormComponent,
    FormcontrolReactiveFormComponent,
    FormcontrolFormgroupComponent,
    FormArrayDemoComponent,
    SelectOptionsComponent,
    RadioCheckboxComponent,
    MultipleCheckboxComponent,
    ChildParentCheckboxComponent,
    ChildParentCheckboxBooleanComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomFormsModuleRoutingModule
  ]
})
export class CustomFormsModuleModule { }
