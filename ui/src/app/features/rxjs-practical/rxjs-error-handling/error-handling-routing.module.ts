import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { RetryRetryWhenComponent } from './retry-retry-when/retry-retry-when.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: 'throw-error', component: ThrowErrorComponent },
      { path: 'catch-error', component: CatchErrorComponent },
      { path: 'retry-retrywhen', component: RetryRetryWhenComponent },
      { path: "*", component: ThrowErrorComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorHandlingRoutingModule { }
