import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsFilteringRoutingModule } from './rxjs-filtering-routing.module';
import { TakeUntilWhileLastComponent } from './take-until-while-last/take-until-while-last.component';
import { DebounceDebounceTimeComponent } from './debounce-debounce-time/debounce-debounce-time.component';
import { FirstLastSingleComponent } from './first-last-single/first-last-single.component';
import { SkipWhileUntillLastComponent } from './skip-while-untill-last/skip-while-untill-last.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    TakeUntilWhileLastComponent,
    DebounceDebounceTimeComponent,
    FirstLastSingleComponent,
    SkipWhileUntillLastComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    RxjsFilteringRoutingModule
  ]
})
export class RxjsFilteringModule { }
