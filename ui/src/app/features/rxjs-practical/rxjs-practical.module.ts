import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsPracticalRoutingModule } from './rxjs-practical-routing.module';
import { RxjsDashboardComponent } from './rxjs-dashboard/rxjs-dashboard.component';
import { PromiseDemoComponent } from './promise-demo/promise-demo.component';
import { LayoutRxjsComponent } from './layout-rxjs/layout-rxjs.component';
import { SubHeaderRxjsComponent } from './layout-rxjs/sub-header-rxjs/sub-header-rxjs.component';


@NgModule({
  declarations: [
    LayoutRxjsComponent,
    SubHeaderRxjsComponent,
    RxjsDashboardComponent,
    PromiseDemoComponent
  ],
  imports: [
    CommonModule,
    RxjsPracticalRoutingModule
  ]
})
export class RxjsPracticalModule { }
