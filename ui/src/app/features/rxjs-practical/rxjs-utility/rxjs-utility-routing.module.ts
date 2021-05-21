import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelayWhenComponent } from './delay-when/delay-when.component';
import { TapComponent } from './tap/tap.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "tap", component: TapComponent },
      { path: "delay-when", component: DelayWhenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsUtilityRoutingModule { }
