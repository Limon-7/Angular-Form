import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FromEventComponent } from './from-event/from-event.component';
import { FromComponent } from './from/from.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfComponent } from './of/of.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "create", component: CreateComponent },
      { path: "from", component: FromComponent },
      { path: "fromEvent", component: FromEventComponent },
      { path: "interval-timer", component: IntervalTimerComponent },
      { path: "of", component: OfComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsCreationRoutingModule { }
