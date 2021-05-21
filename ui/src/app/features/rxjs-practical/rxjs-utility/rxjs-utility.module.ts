import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsUtilityRoutingModule } from './rxjs-utility-routing.module';
import { TapComponent } from './tap/tap.component';
import { DelayWhenComponent } from './delay-when/delay-when.component';


@NgModule({
  declarations: [
    TapComponent,
    DelayWhenComponent
  ],
  imports: [
    CommonModule,
    RxjsUtilityRoutingModule
  ]
})
export class RxjsUtilityModule { }
