import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsCreationRoutingModule } from './rxjs-creation-routing.module';
import { CreateComponent } from './create/create.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { FromEventComponent } from './from-event/from-event.component';


@NgModule({
  declarations: [
    CreateComponent,
    OfComponent,
    FromComponent,
    IntervalTimerComponent,
    FromEventComponent
  ],
  imports: [
    CommonModule,
    RxjsCreationRoutingModule
  ]
})
export class RxjsCreationModule { }
