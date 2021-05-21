import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorHandlingRoutingModule } from './error-handling-routing.module';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { RetryRetryWhenComponent } from './retry-retry-when/retry-retry-when.component';


@NgModule({
  declarations: [
    ThrowErrorComponent,
    CatchErrorComponent,
    RetryRetryWhenComponent
  ],
  imports: [
    CommonModule,
    ErrorHandlingRoutingModule
  ]
})
export class ErrorHandlingModule { }
