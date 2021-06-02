import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormValidationRoutingModule } from './form-validation-routing.module';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { AsyncValidatorComponent } from './async-validator/async-validator.component';
import { CrossValidatorComponent } from './cross-validator/cross-validator.component';
import { DynamicValidationComponent } from './dynamic-validation/dynamic-validation.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomValidatorComponent,
    AsyncValidatorComponent,
    CrossValidatorComponent,
    DynamicValidationComponent,
    FormValidationComponent
  ],
  imports: [
    CommonModule,
    FormValidationRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FormValidationModule { }
